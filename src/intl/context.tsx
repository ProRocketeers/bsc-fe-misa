import React, { useCallback, useState } from 'react';
import { IntlProvider as ReactIntlProvider, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';
import en from 'react-intl/locale-data/en';
import { langConfig } from './config';
import { IntlContextState, IntlState, LocaleLangs } from './types';

addLocaleData([...cs, ...en]);

const defaultIntl = langConfig.cs;

const IntlContext = React.createContext<IntlContextState>({
  ...defaultIntl,
  changeLocale: () => {},
});

const IntlProvider: React.FC = ({ children }) => {
  const [ intl, setIntl ] = useState<IntlState>(defaultIntl);

  const changeLocale = useCallback((locale: LocaleLangs) => {
    setIntl(langConfig[locale]);
  }, []);

  return (
    <IntlContext.Provider value={{ ...intl, changeLocale }}>
      <ReactIntlProvider
        {...intl}
        textComponent={React.Fragment}
      >
        { children }
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};

export { IntlProvider, IntlContext };
