import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AuthConfig from './AuthConfig';

const Auth = () => {
  const { routes } = AuthConfig;

  return (
    <div>
      <Switch>
        {routes.map((route, idx) => {
          const { path, role, exact, component } = route;
          return <Route key={idx} exact={exact} path={path} role={role} component={component} />
        })}
      </Switch>
    </div>
  );
};

export default Auth;
