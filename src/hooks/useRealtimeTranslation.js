import { useEffect } from 'react';
import { useLanguageContext } from '../contexts/LanguageContext';

// Simple client-side text translation
const simpleTranslations = {
  or: {
    // Add more translations as needed
    'Policy': 'ନୀତି',
    'Vision': 'ଦୃଷ୍ଟିକୋଣ',
    'Mission': 'ମିଶନ',
    'Targets': 'ଲକ୍ଷ୍ୟ',
    'Odisha': 'ଓଡ଼ିଶା',
    'AI': 'ଏଆଇ',
  }
};

const useRealtimeTranslation = () => {
  const { language } = useLanguageContext();

  // Translate DOM text content on language change
  useEffect(() => {
    if (language === 'en') return; // No translation needed for English

    // Get all text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const nodesToTranslate = [];
    let node;

    // Collect all text nodes
    while (node = walker.nextNode()) {
      const text = node.textContent.trim();
      
      // Skip empty nodes and script/style tags
      if (text && 
          node.parentElement?.tagName !== 'SCRIPT' && 
          node.parentElement?.tagName !== 'STYLE' &&
          node.parentElement?.className?.includes('notranslate') === false) {
        
        nodesToTranslate.push(node);
      }
    }

    // Apply translations
    nodesToTranslate.forEach(node => {
      const originalText = node.textContent.trim();
      let translatedText = originalText;

      // Try to find translation
      if (simpleTranslations[language]) {
        Object.entries(simpleTranslations[language]).forEach(([key, value]) => {
          if (originalText.includes(key)) {
            translatedText = translatedText.replace(
              new RegExp(`\\b${key}\\b`, 'gi'),
              value
            );
          }
        });
      }

      if (translatedText !== originalText) {
        node.textContent = translatedText;
      }
    });

  }, [language]);
};

export default useRealtimeTranslation;
