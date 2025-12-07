import React, { useState } from 'react';
import { Moon, Sun, Type, Contrast, Volume2, X, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const AccessibilityToolbar = ({ inline = false }) => {
  const { theme, fontSize, highContrast, toggleTheme, changeFontSize, toggleHighContrast } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  const announceChange = (message) => {
    if (screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
    announceChange(`Theme changed to ${theme === 'light' ? 'dark' : 'light'} mode`);
  };

  const handleFontSizeChange = (size) => {
    changeFontSize(size);
    announceChange(`Font size changed to ${size}`);
  };

  const handleContrastToggle = () => {
    toggleHighContrast();
    announceChange(`High contrast mode ${!highContrast ? 'enabled' : 'disabled'}`);
  };

  return (
    <>
      {/* Accessibility Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={inline
          ? "p-2 text-gray-700 dark:text-white hover:text-orange-600 transition-colors duration-200 focus:outline-none"
          : "fixed top-6 right-6 z-[100] w-14 h-14 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
        }
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className={`w-6 h-6 ${!inline && 'text-white'} ${isOpen ? 'rotate-90' : ''} transition-transform duration-300`} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-stack-overlay flex items-end sm:items-center justify-end sm:justify-end p-4 animate-in fade-in duration-300">
          <Card className="w-full sm:w-96 max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-2xl animate-in slide-in-from-right duration-300">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-orange-600" />
                  Accessibility
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Theme Toggle */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Theme
                </label>
                <button
                  onClick={handleThemeToggle}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  <span className="flex items-center text-gray-900 dark:text-white font-medium">
                    {theme === 'light' ? (
                      <>
                        <Sun className="w-5 h-5 mr-3 text-yellow-500" style={{ display: 'block' }} />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 mr-3 text-blue-400" style={{ display: 'block' }} />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'} relative`}>
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                  </div>
                </button>
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <Type className="w-4 h-4 inline mr-2" />
                  Font Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['small', 'normal', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleFontSizeChange(size)}
                      className={`p-3 rounded-lg border-2 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 ${fontSize === size
                        ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400'
                        : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      aria-label={`Set font size to ${size}`}
                      aria-pressed={fontSize === size}
                    >
                      {size === 'small' && 'A'}
                      {size === 'normal' && 'A'}
                      {size === 'large' && 'A'}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="mb-6">
                <button
                  onClick={handleContrastToggle}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                  aria-pressed={highContrast}
                >
                  <span className="flex items-center text-gray-900 dark:text-white font-medium">
                    <Contrast className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    High Contrast
                  </span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${highContrast ? 'bg-purple-600' : 'bg-gray-300'} relative`}>
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${highContrast ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                  </div>
                </button>
              </div>

              {/* Screen Reader Announcements */}
              <div className="mb-6">
                <button
                  onClick={() => {
                    setScreenReader(!screenReader);
                    announceChange(`Screen reader announcements ${!screenReader ? 'enabled' : 'disabled'}`);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label={`${screenReader ? 'Disable' : 'Enable'} screen reader announcements`}
                  aria-pressed={screenReader}
                >
                  <span className="flex items-center text-gray-900 dark:text-white font-medium">
                    <Volume2 className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                    Announcements
                  </span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${screenReader ? 'bg-green-600' : 'bg-gray-300'} relative`}>
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${screenReader ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                  </div>
                </button>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Keyboard Shortcuts
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Skip to main content</span>
                    <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Tab</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Navigate sections</span>
                    <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Tab / Shift+Tab</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Activate button</span>
                    <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Enter / Space</kbd>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Skip to main content link */}

    </>
  );
};

export default AccessibilityToolbar;
