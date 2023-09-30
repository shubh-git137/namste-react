import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="about">
        <h1>Hello</h1>
        <h3>This is namste react</h3>
        <UserClass name={"First"} location={"Noida"} />
      </div>
    );
  }
}

export default About;
