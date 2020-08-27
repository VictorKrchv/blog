import React from "react";

import { JoinLoginPage } from "./join/login/page";
import { JoinRegisterPage } from "./join/register/page";
import { HomePage } from "./home/page";
import { NotFoundPage } from "./not-found/page";
import { CreateArticlePage } from "./create/page"
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStore } from "effector-react";
import { $session } from "../features/common/session";

export const Routes = () => {
  const session = useStore($session);
  return (
    <>
      <Switch>
        <Route path="/login">
          {session ? <Redirect to="/" /> : <JoinLoginPage />}
        </Route>
        <Route path="/register">
          {session ? <Redirect to="/" /> : <JoinRegisterPage />}
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/create">
          <CreateArticlePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};
