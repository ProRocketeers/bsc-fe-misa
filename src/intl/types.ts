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
  [key in LocaleLangs]: IntlState & {
  name: string;
};
}

export interface IntlContextState extends IntlState {
  changeLocale: (locale: LocaleLangs) => void;
}
