import React from 'react';
import { Alert as ReactAlert } from 'react-bootstrap';
import { AlertBarProps } from './types';
import './style.scss';

export const AlertBar: React.FC<AlertBarProps> = ({ alert, visible, setVisible }) => (
  <ReactAlert
    className="alertBar"
    dismissible
    variant={(alert && alert.variant) || 'primary'}
    show={visible}
    onClose={() => setVisible(false)}
  >
    {alert && alert.message}
  </ReactAlert>
);
