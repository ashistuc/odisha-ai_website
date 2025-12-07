# Real-Time Translation System - Quick Start Guide

## 🎯 What You Can Do Now

### For Users:
1. **Click Language Button** - In the header, click "English" or "ଓଡ଼ିଆ"
2. **See Real-Time Translation** - Content translates instantly
3. **Language is Saved** - Your choice is remembered on next visit

### For Developers:

## Example 1: Use Translation in Your Component

```jsx
import { useLanguageContext } from './contexts/LanguageContext';
import { getTranslation } from './translations/translationMap';

export function MyComponent() {
  const { language } = useLanguageContext();
  
  return (
    <div>
      <h1>{getTranslation('Odisha AI Mission', language)}</h1>
      <p>{getTranslation('Government of Odisha', language)}</p>
    </div>
  );
}
```

## Example 2: Add New Translations

```javascript
// In src/translations/translationMap.js

export const translationMap = {
  // ... existing translations ...
  
  'Welcome to Odisha AI': {
    en: 'Welcome to Odisha AI',
    or: 'ଓଡ଼ିଶା ଏଆଇକୁ ସ୍ୱାଗତମ'
  },
  
  'Start Learning': {
    en: 'Start Learning',
    or: 'ଶିକ୍ଷା ଆରମ୍ଭ କରନ୍ତୁ'
  }
};
```

Then use it:
```jsx
<h1>{getTranslation('Welcome to Odisha AI', language)}</h1>
<button>{getTranslation('Start Learning', language)}</button>
```

## Example 3: Create Language-Specific Content

```jsx
import { useLanguageContext } from './contexts/LanguageContext';

export function LanguageSpecificContent() {
  const { language } = useLanguageContext();
  
  return language === 'or' ? (
    <div className="text-center">
      <h1>ଓଡ଼ିଶା ଏଆଇ ମିଶନକୁ ସ୍ୱାଗତମ</h1>
      <p>ଏଠାରେ ଆମ୍ଭେ ଏଆଇ ପ୍ରଯୁକ୍ତି ଦ୍ୱାରା ଓଡ଼ିଶାକୁ ସେବା କରୁ</p>
    </div>
  ) : (
    <div className="text-center">
      <h1>Welcome to Odisha AI Mission</h1>
      <p>Here we serve Odisha through AI technology</p>
    </div>
  );
}
```

## Example 4: Get Multiple Translations

```jsx
import { getTranslations } from './translations/translationMap';
import { useLanguageContext } from './contexts/LanguageContext';

export function Navigation() {
  const { language } = useLanguageContext();
  
  const navLabels = getTranslations([
    'Home',
    'About',
    'Services',
    'Contact'
  ], language);
  
  return (
    <nav>
      <a href="/">{navLabels['Home']}</a>
      <a href="/about">{navLabels['About']}</a>
      <a href="/services">{navLabels['Services']}</a>
      <a href="/contact">{navLabels['Contact']}</a>
    </nav>
  );
}
```

## Example 5: Listen to Language Changes

```jsx
import { useEffect } from 'react';

export function MyComponent() {
  useEffect(() => {
    const handleLanguageChange = (event) => {
      console.log('User switched to:', event.detail.language);
      // Do something when language changes
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);
  
  return <div>My Component</div>;
}
```

## 🎨 UI Components with Translation

### Button Component
```jsx
export function TranslatedButton({ labelKey, onClick }) {
  const { language } = useLanguageContext();
  
  return (
    <button onClick={onClick}>
      {getTranslation(labelKey, language)}
    </button>
  );
}

// Usage:
<TranslatedButton labelKey="Submit" onClick={handleSubmit} />
```

### Form Component
```jsx
export function MyForm() {
  const { language } = useLanguageContext();
  
  return (
    <form>
      <label>{getTranslation('Name', language)}</label>
      <input type="text" placeholder={getTranslation('Enter your name', language)} />
      
      <button type="submit">{getTranslation('Submit', language)}</button>
    </form>
  );
}
```

## 📋 Common Translations Already Available

### Navigation
- Home → ମୂଳ ପୃଷ୍ଠା
- About → ଆମ ବିଷୟରେ
- Services → ସେବାଗୁଡ଼ିକ
- Contact → ଯୋଗାଯୋଗ

### Buttons
- Submit → ଦାଖଲ କରନ୍ତୁ
- Cancel → ବାତିଲ
- Save → ସେଭ୍ କରନ୍ତୁ
- Delete → ଡିଲିଟ୍

### Status Messages
- Loading... → ଲୋଡ ହେଉଛି...
- Error → ତ୍ରୁଟି
- Success → ସଫଳ

## 🔄 How Translation Works

1. **User clicks language button** (e.g., Odia)
2. **Page shows loading spinner**
3. **JavaScript translates all text on page**
4. **Results are cached for speed**
5. **Language preference is saved**
6. **On next visit, preference is restored**

## ⚡ Performance Tips

1. **Pre-translate common strings** in `translationMap.js` (instant, no API)
2. **Reuse translations** - Don't translate the same text twice
3. **Batch operations** - Translate multiple items together
4. **Check cache** - Translations are cached automatically

## 🚀 Deploy Your Changes

```bash
# Build for production
npm run build

# The build folder is ready to deploy
```

## 📞 Support

For issues or questions:
1. Check `TRANSLATION_GUIDE.md` for detailed documentation
2. Review code examples in `TRANSLATION_QUICK_REFERENCE.js`
3. Check browser console for error messages
4. Verify `src/translations/translationMap.js` has your strings

---

**Happy Translating! 🎉**
