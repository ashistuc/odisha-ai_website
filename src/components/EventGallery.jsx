import React, { useState } from 'react';
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const EventGallery = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (event, index) => {
    setLightboxMedia(event.media);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxMedia(null);
    setLightboxIndex(0);
  };

  const nextMedia = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxMedia.length);
  };

  const prevMedia = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxMedia.length) % lightboxMedia.length);
  };

  const handleKeyPress = (e) => {
    if (!lightboxMedia) return;
    if (e.key === 'ArrowRight') nextMedia();
    if (e.key === 'ArrowLeft') prevMedia();
    if (e.key === 'Escape') closeLightbox();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxMedia]);

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300 hover:bg-pink-200 mb-4 px-4 py-2">
          <ImageIcon className="w-4 h-4 mr-2" />
          Event Memories
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Event Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore moments captured from AI Mission events, workshops, and celebrations across Odisha
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {events.map((event) => (
          <Card
            key={event.id}
            className="group cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-600 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800"
            onClick={() => setSelectedEvent(event)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${event.eventName} gallery`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedEvent(event);
              }
            }}
          >
            {/* Event Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.eventName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <Badge className="bg-pink-600 text-white mb-2">
                  {event.media.length} {event.media.length === 1 ? 'item' : 'items'}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {event.eventName}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                {new Date(event.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                {event.location}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-2">
                {event.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 z-stack-modal flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between z-10">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedEvent.eventName}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(selectedEvent.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedEvent.location}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  {selectedEvent.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedEvent(null)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Media Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedEvent.media.map((media, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(selectedEvent, index)}
                  className="group relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label={`View ${media.caption}`}
                >
                  <img
                    src={media.type === 'video' ? media.thumbnail : media.url}
                    alt={media.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {media.type === 'video' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {media.caption}
                    </p>
                  </div>
                  {media.type === 'video' && (
                    <Badge className="absolute top-2 right-2 bg-pink-600 text-white">
                      <Video className="w-3 h-3 mr-1" />
                      Video
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-stack-modal flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
            aria-label="Close viewer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          {lightboxMedia.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-4 text-white hover:text-pink-400 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-4 text-white hover:text-pink-400 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
                aria-label="Next media"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          {/* Media Display */}
          <div
            className="max-w-6xl max-h-[90vh] w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxMedia[lightboxIndex].type === 'video' ? (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={lightboxMedia[lightboxIndex].url}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                  title={lightboxMedia[lightboxIndex].caption}
                ></iframe>
              </div>
            ) : (
              <img
                src={lightboxMedia[lightboxIndex].url}
                alt={lightboxMedia[lightboxIndex].caption}
                className="w-full h-full object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {lightboxMedia[lightboxIndex].caption}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {lightboxIndex + 1} / {lightboxMedia.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
