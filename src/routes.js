import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Default from './pages/_layout/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
    </Switch>
  );
}
