import csTranslations from './cs.json';
import enTranslations from './en.json';
import csImage from '../images/cs_square.svg';
import enImage from '../images/en_square.svg';
import { LangConfig } from './types';

export const langConfig: LangConfig = {
  cs: {
    locale: 'cs',
    messages: csTranslations,
    name: 'Čeština',
    image: csImage,
  },
  en: {
    locale: 'en',
    messages: enTranslations,
    name: 'English',
    image: enImage,
  },
};
