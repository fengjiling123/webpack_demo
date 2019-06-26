import React from "react";
import "./index.less";

class PAGE_2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        page_2
      </div>
    );
  }
}

export default PAGE_2;
