import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home4 from "./components/Home4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/blogs">
          <Home4 />
        </Route>
      </Switch>
    </>
  </Router>
);
