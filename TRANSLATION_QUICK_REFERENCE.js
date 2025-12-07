// QUICK REFERENCE: Real-Time Translation Usage

// ============================================
// 1. GET CURRENT LANGUAGE
// ============================================
import { useLanguageContext } from './contexts/LanguageContext';

function MyComponent() {
  const { language } = useLanguageContext();
  console.log('Current language:', language); // 'en' or 'or'
}

// ============================================
// 2. CHANGE LANGUAGE PROGRAMMATICALLY
// ============================================
import { useLanguageContext } from './contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageContext();
  
  return (
    <button onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}>
      Switch Language
    </button>
  );
}

// ============================================
// 3. USE STATIC TRANSLATIONS (RECOMMENDED FOR UI)
// ============================================
import { useLanguageContext } from './contexts/LanguageContext';
import { getTranslation } from './translations/translationMap';

function Header() {
  const { language } = useLanguageContext();
  
  return (
    <div>
      <h1>{getTranslation('Odisha AI Mission', language)}</h1>
      <p>{getTranslation('Government of Odisha', language)}</p>
    </div>
  );
}

// ============================================
// 4. TRANSLATE DYNAMIC CONTENT
// ============================================
import TranslationService from './services/TranslationService';

async function translateContent() {
  const element = document.getElementById('content');
  await TranslationService.translateElement(element, 'or');
}

// Or single text translation:
async function translateText() {
  const result = await TranslationService.translateWithLibreTranslate(
    'Hello World',
    'or'
  );
  console.log(result); // Odia translation
}

// ============================================
// 5. ADD NEW STATIC TRANSLATION
// ============================================
// Edit: src/translations/translationMap.js
// Add:
export const translationMap = {
  'Your New String': {
    en: 'Your New String',
    or: 'ଆପଣଙ୍କ ନୂତନ ଷ୍ଟ୍ରିଙ୍ଗ'
  }
};

// ============================================
// 6. LISTEN TO LANGUAGE CHANGES
// ============================================
useEffect(() => {
  const handleLanguageChange = (event) => {
    console.log('Language changed to:', event.detail.language);
  };

  window.addEventListener('languageChange', handleLanguageChange);
  
  return () => {
    window.removeEventListener('languageChange', handleLanguageChange);
  };
}, []);

// ============================================
// 7. GET MULTIPLE TRANSLATIONS AT ONCE
// ============================================
import { getTranslations } from './translations/translationMap';

function MultiTranslate() {
  const { language } = useLanguageContext();
  
  const strings = getTranslations([
    'Home',
    'About',
    'Contact'
  ], language);
  
  return (
    <div>
      <p>{strings['Home']}</p>
      <p>{strings['About']}</p>
      <p>{strings['Contact']}</p>
    </div>
  );
}

// ============================================
// 8. CONDITIONAL RENDERING BASED ON LANGUAGE
// ============================================
function LanguageSpecificComponent() {
  const { language } = useLanguageContext();
  
  return language === 'or' ? (
    <div>ଓଡ଼ିଆ ବିষয়ବସ୍ତୁ</div>
  ) : (
    <div>English Content</div>
  );
}

// ============================================
// 9. USE TRANSLATION WITH LOCAL STORAGE
// ============================================
function SaveUserLanguage() {
  const { language, setLanguage } = useLanguageContext();
  
  useEffect(() => {
    // Already saved in LanguageContext
    // But you can access it like this:
    const saved = localStorage.getItem('preferredLanguage');
    console.log('Saved language:', saved);
  }, [language]);
}

// ============================================
// 10. CLEAR TRANSLATION CACHE
// ============================================
import TranslationService from './services/TranslationService';

function ClearCache() {
  return (
    <button onClick={() => {
      TranslationService.clearCache();
      console.log('Translation cache cleared');
    }}>
      Clear Cache
    </button>
  );
}

// ============================================
// SUPPORTED LANGUAGES
// ============================================
/*
- en: English
- or: Odia (ଓଡ଼ିଆ)

To add more:
1. Update LanguageContext.jsx
2. Add translations to translationMap.js
3. Add buttons in Header.jsx
*/
