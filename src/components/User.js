import { useState } from "react";
const User = (props) => {
  const {name} = props;
  const [count] = useState(0);
  return (
    <div className="user-class">
      <h1>Count: {count}</h1>
      <h3>Name: {name}</h3>
      <h3>Location: Noida</h3>
      <h3>PinCode: 223104</h3>
    </div>
  );
};

export default User;
