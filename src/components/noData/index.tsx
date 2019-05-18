import * as React from 'react';
import { Translated } from '../translated';
import { messages } from './messages';
import './styles.scss';

export const NoData = () => (
  <div className="noData">
    <Translated message={messages.noData} />
  </div>
);
