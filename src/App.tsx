import * as React from 'react';
import { IntlProvider } from './intl/context';
import { Router } from './router'

const App: React.FC = () => {
  return (
    <IntlProvider>
      <Router />
    </IntlProvider>
  );
};

export default App;
