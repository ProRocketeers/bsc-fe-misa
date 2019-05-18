import * as React from 'react';

export interface AlertBarProps {
  alert: Alert;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export interface Alert {
  message: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  duration?: number;
}

export interface WithAlert {
  alert: (alert: Alert) => void;
}
