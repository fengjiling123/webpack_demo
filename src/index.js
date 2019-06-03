import React from "react";
import ReactDom from "react-dom";
import Main from './pages/main';

class App extends React.Component {
  render() {
    return <div>
      <Main/>
    </div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
