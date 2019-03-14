import React from "react";

import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";

import { Home } from "pages";
import { Header } from "organisms";

import "Global.scss";

const App = () => (
  <>
    <Helmet>
      <title>모이다</title>
      <meta
        name="description"
        content="다른 사람들과 공유하고 싶을 때, 모이다에서 모여요."
      />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
