import * as React from 'react';
import './styles.scss';
import { Spinner as ReactSpinner } from 'react-bootstrap';
import { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = ({ loading }) =>
  (
    <>
      {
        loading && (
          <div className="spinnerIndicator">
            <ReactSpinner animation="border" />
          </div>
        )
      }
    </>
  );
