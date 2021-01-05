import React from "react";

import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../../services/routes/routes";

import Header from "../header";
import ErrorIndicator from "../error-indicator";

const App = () => {

    const error = useSelector(({ errorIndicatorState }) => errorIndicatorState.error);

    if (error) {
        return <ErrorIndicator />
    }

  return (
      <div className="container w-full mx-auto relative">
          <Header />
          <Switch>
              {
                  routes.map((route, idx) => {
                      const { role, path, exact, component } = route;
                      return <Route key={idx} role={role} exact={exact} path={path} component={component} />
                  })
              }
          </Switch>
      </div>
  );
}

export default App;
