import { useContext } from 'react';
import * as React from 'react';
import { langConfig } from '../../intl/config';
import { IntlContext } from '../../intl/context';

export const LanguageSelect = () => {
  const { changeLocale } = useContext(IntlContext);
  return (
    <>
      {
        Object.values(langConfig).map((config) => (
          <button onClick={() => changeLocale(config.locale)} title={config.name}>
            { config.name }
          </button>
        ))
      }
    </>
  );
};
