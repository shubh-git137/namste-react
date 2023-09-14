import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default Name",
        location: "Default Location",
        avatar_url:
          "https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78=",
      },
    };
    console.log(" Child constructor called!");
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namste React OP");
    }, 1000);
    // console.log("Component Did Mount Called");
  }

  componentDidUpdate() {
    // console.log("Component Did update called");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }
  render() {
    // console.log(" child Rendered called!");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-class">
        <img src={avatar_url} alt="" width={100} height={60} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;

/**
 * ----- Mounting LifeCycle -----
 * Cunstruct(Dummy)
 * Render(Dummy)
 *      <Html Dummy >
 * Component Did Mount
 *      <api call>
 *      <this.setState()> --> State Variable is updated
 *
 *  ------ Update ----
 *    render(Api Data)
 *    <Html (new Api Data)>
 *    Component did update
 */
