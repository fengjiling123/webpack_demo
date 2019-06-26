import React from "react";
import "./index.less";
import IMG1 from "../../assets/img1.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="--main">
        <div>Main</div>
        <img src={IMG1} alt="" />
        <input type="text"/>
      </div>
    );
  }
}
export default Main;
