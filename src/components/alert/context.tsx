import React, { useCallback, useState } from 'react';
import { AlertBar } from './index';
import { Alert, WithAlert } from './types';

const AlertContext = React.createContext<WithAlert>({
  alert: () => {
  },
});

const AlertProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<Alert>({
    message: ''
  });
  const [visible, setVisible] = useState(false);

  const doAlert = useCallback((newAlert: Alert) => {
    setAlert(newAlert);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, newAlert.duration || 5000);
  }, []);

  return (
    <AlertContext.Provider value={{ alert: doAlert }}>
      {children}
      <AlertBar alert={alert} visible={visible} setVisible={setVisible} />
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
