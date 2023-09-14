import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor() {
    super();
    // console.log("Parent Constructor called!");
  }
  componentDidMount() {
    // console.log("Parent Component Did mount called!");
  }
  render() {
    // console.log("Parent Render called!");
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
