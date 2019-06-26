import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./router";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
