import React from 'react';
import { Route, Switch } from 'react-router';

import indexRoutes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {indexRoutes.map(({ component: Component, name, ...route }) => (
            <Route
              key={`route-${name}`}
              render={renderProps => (
                <Component
                  {...renderProps}
                />
              )}
              {...route}
            />
          ))}
        </Switch>
      </React.Fragment>
    );
  };
};
