import React from "react";

import { JoinLoginPage } from "./join/login/page";
import { JoinRegisterPage } from "./join/register/page";
import { HomePage } from "./home/page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <JoinLoginPage />
        </Route>
        <Route path="/register">
          <JoinRegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
