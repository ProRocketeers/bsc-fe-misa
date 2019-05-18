import * as React from 'react';
import { AlertContext } from './context';
import { WithAlert } from './types';

export const withAlert = <T extends WithAlert>(Component: React.ComponentType<T>) => (props: T) => (
  <AlertContext.Consumer>
    {
      ({ alert }: WithAlert) => <Component {...props} alert={alert} />
    }
  </AlertContext.Consumer>
);
