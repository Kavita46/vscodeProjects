import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutDetail from "./AboutDetail";

export default function About() {
  return (
    <div>
      <h2>这里是About</h2>
      <Switch>
        <Route path={"/about/aboutDetail"} component={AboutDetail}></Route>
      </Switch>
    </div>
  );
}
