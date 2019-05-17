import { LanguageButtonAttrs } from '../components/languageSelect/types';

export type Locales = {
  cs: string;
  en: string;
};

export type LocaleLangs = keyof Locales;

export interface IntlState {
  locale: LocaleLangs;
  messages: object;
}

export type LangConfig = {
  [key in LocaleLangs]: IntlState & LanguageButtonAttrs;
}

export interface IntlContextState extends IntlState {
  changeLocale: (locale: LocaleLangs) => void;
}
