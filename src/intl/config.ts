import csTranslations from './cs.json';
import enTranslations from './en.json';
import { LangConfig } from './types';

export const langConfig: LangConfig = {
  cs: {
    locale: 'cs',
    messages: csTranslations,
    name: 'Čeština',
  },
  en: {
    locale: 'en',
    messages: enTranslations,
    name: 'English',
  },
};
