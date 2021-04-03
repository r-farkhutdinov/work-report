import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader } from '../components/Loader';

import { Routes } from './routes';

const Report = React.lazy(() => import('./Report'));

export const Pages: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route {...Routes.report} component={Report} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};
