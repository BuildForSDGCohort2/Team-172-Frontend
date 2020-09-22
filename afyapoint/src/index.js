import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import your fontawesome library
import "./fontawesome";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./index.css";
import App from "./App";
import CallToAction from "./components/callToAction/CallToAction";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/signup">
          <CallToAction />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
