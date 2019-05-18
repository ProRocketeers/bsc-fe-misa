import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../layout/main';
import { routes } from './config';

export const Router: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        {
          routes.map((route) => (
            <Route key={`${route.path}`} {...route} />
          ))
        }
      </Switch>
    </MainLayout>
  </BrowserRouter>
);
