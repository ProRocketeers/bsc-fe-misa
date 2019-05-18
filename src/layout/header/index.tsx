import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LanguageSelect } from '../../components/languageSelect';
import { Translated } from '../../components/translated';
import { paths } from '../../router/config';
import { messages } from './messages';
import './styles.scss';
import classNames from 'classnames';

export const Header = withRouter(({ location }) => {
  return (
    <header>
      <Link to={paths.default}>
        <h1>
          <span
            className={classNames('backArrow', {
              visible: location.pathname !== paths.default,
            })}
          >
            &#x1F868;
          </span>
          <Translated message={messages.title} />
        </h1>
      </Link>
      <LanguageSelect />
    </header>
  );
});
