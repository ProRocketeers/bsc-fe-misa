import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './styles.scss';
import { LoadingIndicatorProps } from './types';

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ loading }) =>
  (
    <>
      {
        loading && (
          <div className="loadingIndicator">
            <ProgressBar animated now={100} />
          </div>
        )
      }
    </>
  );
