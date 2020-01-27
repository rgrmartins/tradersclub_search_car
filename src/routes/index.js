import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import CarList from '../pages/CarList';
import CarForm from '../pages/CarForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/car_list" component={CarList} />
      <Route path="/car_form" component={CarForm} />

      <Route path="/" component={() => <h1>404 Error</h1>} />
    </Switch>
  );
}
