import * as React from "react";

import { Register } from "./components/register/Register";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Login } from "./components/login/Login";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={Register} />
        <Route exact={true} path="/register" component={Register} />
        <Route exact={true} path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
