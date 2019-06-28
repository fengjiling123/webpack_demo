import React from "react";
import "./index.less";

class PAGE_1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("page1");
  }

  render() {
    return (
      <div
        onClick={() => {
          this.props.history.push("/page2");
        }}
      >
        page_1
      </div>
    );
  }
}

export default PAGE_1;
