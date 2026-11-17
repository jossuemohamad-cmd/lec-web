import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Lang, t as translate } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lecasu_lang');
    return saved === 'en' ? 'en' : 'pt'; // Default to PT
  });

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  useEffect(() => {
    localStorage.setItem('lecasu_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-MZ' : 'en';
  }, [lang]);

  const t = (key: string) => translate(key, lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
