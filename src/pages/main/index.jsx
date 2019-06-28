import React from "react";
import "./index.less";
import IMG1 from "../../assets/img1.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("main");
  }

  render() {
    return (
      <div className="--main">
        <div
          onClick={() => {
            this.props.history.push("/page1");
          }}
        >
          Main
        </div>
        <img src={IMG1} alt="" />
        <input type="text" />
      </div>
    );
  }
}
export default Main;
