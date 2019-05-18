import * as React from 'react';
import { AlertProvider } from './components/alert/context';
import { IntlProvider } from './intl/context';
import { Router } from './router'

const App: React.FC = () => {
  return (
    <IntlProvider>
      <AlertProvider>
        <Router />
      </AlertProvider>
    </IntlProvider>
  );
};

export default App;
