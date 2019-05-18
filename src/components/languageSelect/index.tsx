import * as React from 'react';
import { useCallback, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { langConfig } from '../../intl/config';
import { IntlContext } from '../../intl/context';
import * as R from 'ramda';
import './styles.scss';

export const LanguageSelect = () => {
  const { changeLocale, locale } = useContext(IntlContext);
  const selectedConfig = langConfig[locale];

  const renderLangOption = useCallback((config) => (
    <Dropdown.Item
      key={`lang-${config.locale}`}
      onClick={() => changeLocale(config.locale)}
      active={locale === config.locale}
    >
      <img
        className="lang-flag"
        src={config.image}
        alt={config.name}
        title={config.name}
      />
      {config.name}
    </Dropdown.Item>
  ), [locale, changeLocale]);

  return (
    <Dropdown className="languageSelect">
      <Dropdown.Toggle id="languageToggle">
        <img
          className="lang-flag"
          src={selectedConfig.image}
          alt={selectedConfig.name}
          title={selectedConfig.name}
        />
        {selectedConfig.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { R.map(renderLangOption, Object.values(langConfig)) }
      </Dropdown.Menu>
    </Dropdown>
  );
};
