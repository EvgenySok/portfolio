import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Post from "./components/post"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route exact path="/post/:title" component={() => <Post />} />
        <Route exact path="/" component={() => <App />} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
