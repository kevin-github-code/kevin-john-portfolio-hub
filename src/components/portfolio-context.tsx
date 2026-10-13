import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '@/data/projects';
const PortfolioContext = createContext({ language: 'pt' as Language, setLanguage: (_: Language) => {}, light: false, toggleTheme: () => {} });
export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [light, setLight] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark'; document.documentElement.lang = language; }, [light, language]);
  return <PortfolioContext.Provider value={{ language, setLanguage, light, toggleTheme: () => setLight(value => !value) }}>{children}</PortfolioContext.Provider>;
}
export const usePortfolio = () => useContext(PortfolioContext);