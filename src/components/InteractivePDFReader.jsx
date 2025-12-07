import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Loader2, AlertCircle, Download } from 'lucide-react';
import { Button } from './ui/button';
import $ from 'jquery';
import 'turn.js';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

if (typeof window !== 'undefined') {
  window.jQuery = window.jQuery || $;
  window.$ = window.$ || $;
}

// Use CDN-hosted PDF.js worker to avoid dynamic import issues in production
// (especially on GitHub Pages / subpath deployments).
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

const InteractivePDFReader = ({ isOpen, onClose, pdfUrl }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookSize, setBookSize] = useState({ width: 900, height: 600 });

  const bookRef = useRef(null);
  const turnInstanceRef = useRef(null);
  const bookSizeRef = useRef(bookSize);

  const resolvedPdfUrl = useMemo(() => {
    if (!pdfUrl) return '';
    if (/^(https?:)?\/\//i.test(pdfUrl) || pdfUrl.startsWith('data:')) {
      return pdfUrl;
    }

    const base = process.env.PUBLIC_URL || '';
    const normalized = pdfUrl.startsWith('/') ? pdfUrl : `/${pdfUrl}`;
    return `${base}${normalized}`;
  }, [pdfUrl]);

  useEffect(() => {
    if (!isOpen || !resolvedPdfUrl) return undefined;

    let isCancelled = false;

    const loadPdf = async () => {
      setLoading(true);
      setError('');
      setPages([]);
      setCurrentPage(1);
      setLoadProgress(0);

      try {
        // Use default browser caching to avoid re-downloading the PDF on every open
        const response = await fetch(resolvedPdfUrl);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const pdfData = await response.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        const totalPagesToLoad = pdf.numPages || 0;
        const loadedPages = [];

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (isCancelled) return;

          const page = await pdf.getPage(pageNumber);
          // Slightly lower render scale to speed up rendering while keeping good readability
          const viewport = page.getViewport({ scale: 1.0 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;

          loadedPages.push({
            id: pageNumber,
            src: canvas.toDataURL('image/png'),
            width: viewport.width,
            height: viewport.height,
          });

          if (!isCancelled && totalPagesToLoad > 0) {
            const progress = Math.round((loadedPages.length / totalPagesToLoad) * 100);
            setLoadProgress(progress);
          }
        }

        if (!isCancelled) {
          setPages(loadedPages);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error('Failed to load PDF', err);
          setError(err?.message || 'Unable to load the AI Policy. Please try again later.');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isCancelled = true;
    };
  }, [isOpen, resolvedPdfUrl]);

  useEffect(() => {
    if (pages.length === 0) return;

    const [firstPage] = pages;

    const updateSize = () => {
      const ratio = firstPage.height / firstPage.width || 1.414;
      const maxWidth = Math.min(window.innerWidth - 96, 1200);
      const maxHeight = Math.min(window.innerHeight - 200, 900);

      let width = maxWidth;
      let height = (width / 2) * ratio;

      if (height > maxHeight) {
        height = maxHeight;
        width = Math.min(maxWidth, (height * 2) / ratio);
      }

      setBookSize({
        width: Math.round(width),
        height: Math.round(height),
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [pages]);

  useEffect(() => {
    bookSizeRef.current = bookSize;

    if (turnInstanceRef.current && bookSize.width && bookSize.height) {
      turnInstanceRef.current.turn('size', bookSize.width, bookSize.height);
    }
  }, [bookSize]);

  useEffect(() => {
    if (!isOpen || pages.length === 0 || !bookRef.current) return;

    const $book = $(bookRef.current);

    if ($book.data('turn')) {
      $book.turn('destroy');
    }

    const handleTurn = (_event, page) => {
      setCurrentPage(page);
    };

    const timer = setTimeout(() => {
      const { width, height } = bookSizeRef.current;

      $book.turn({
        width,
        height,
        autoCenter: true,
        display: 'double',
        gradients: true,
        elevation: 50,
      });

      $book.on('turned', handleTurn);
      turnInstanceRef.current = $book;
      setCurrentPage($book.turn('page'));
    }, 0);

    return () => {
      clearTimeout(timer);
      $book.off('turned', handleTurn);
      if ($book.data('turn')) {
        $book.turn('destroy');
      }
      turnInstanceRef.current = null;
    };
  }, [isOpen, pages]);

  const bookPages = useMemo(() => {
    if (pages.length === 0) return [];
    return pages.length % 2 === 0 ? pages : [...pages, { id: 'blank', blank: true }];
  }, [pages]);

  const totalPages = bookPages.length;
  const displayPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 0;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handlePrev = () => {
    if (turnInstanceRef.current) {
      turnInstanceRef.current.turn('previous');
    }
  };

  const handleNext = () => {
    if (turnInstanceRef.current) {
      turnInstanceRef.current.turn('next');
    }
  };

  const handleClose = () => {
    if (turnInstanceRef.current) {
      const $instance = turnInstanceRef.current;
      if ($instance.data('turn')) {
        $instance.turn('destroy');
      }
      turnInstanceRef.current = null;
    }
    setPages([]);
    setError('');
    setCurrentPage(1);
    setLoadProgress(0);
    onClose?.();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900/70 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 text-white flex-shrink-0">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Official Document</p>
            <h2 className="text-xl font-semibold">Odisha AI Policy 2025</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-white/70">
              {totalPages > 0 ? `Page ${displayPage} / ${totalPages}` : 'Preparing document…'}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-orange-300 hover:bg-white/10"
              onClick={handleClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex-1 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-y-auto overflow-x-hidden px-6 py-6">
          {loading && (
            <div className="flex flex-col items-center justify-center text-white space-y-4 px-6">
              <Loader2 className="w-10 h-10 animate-spin" />
              <p className="text-sm tracking-wide uppercase text-white/70">
                Loading AI Policy… {loadProgress > 0 ? `${loadProgress}%` : ''}
              </p>
              <div className="w-full max-w-md h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-orange-400 transition-all duration-300"
                  style={{ width: `${Math.min(loadProgress, 100)}%` }}
                />
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center text-red-200 space-y-3">
              <AlertCircle className="w-10 h-10" />
              <p className="text-base font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && pages.length > 0 && (
            <div
              className="shadow-2xl rounded-2xl bg-white overflow-hidden flex-shrink-0"
              style={{ width: `${bookSize.width}px`, height: `${bookSize.height}px`, maxWidth: 'calc(100% - 24px)', maxHeight: '100%' }}
            >
              <div ref={bookRef} className="w-full h-full">
                {bookPages.map((page) => (
                  <div
                    key={page.id}
                    className="page w-full h-full bg-white flex items-center justify-center"
                  >
                    {page.blank ? (
                      <div className="text-gray-300 text-sm">End of document</div>
                    ) : (
                      <img
                        src={page.src}
                        alt={`Policy page ${page.id}`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-slate-900/85 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex w-full md:w-auto items-center justify-center md:justify-start gap-3">
            <Button
              onClick={(event) => {
                event.stopPropagation();
                handlePrev();
              }}
              disabled={displayPage <= 1}
              className="bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 disabled:text-slate-300 shadow-md w-full md:w-auto"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                handleNext();
              }}
              disabled={displayPage >= totalPages}
              className="bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 disabled:text-slate-300 shadow-md w-full md:w-auto"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="hidden md:flex items-center text-white/60 text-xs gap-2">
            <span>💡 Use</span>
            <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 font-mono text-white">← →</kbd>
            <span>to navigate</span>
          </div>
          <Button
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-md"
            onClick={(event) => {
              event.stopPropagation();
              if (resolvedPdfUrl) {
                window.open(resolvedPdfUrl, '_blank', 'noopener');
              }
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractivePDFReader;
