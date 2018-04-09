import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";

// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

// create history props for Router to access history outside of components
// allow redirecting function of authentication status
export const history = createHistory();

const AppRouter = () => (
  // Router is used instead of browserRouter to allow passing down history props
  // that has been previously created
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
