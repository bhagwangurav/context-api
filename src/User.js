import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Consumer } from "./UserContext";
function User() {
  const { name } = useContext(UserContext);
  return <h1>{name}</h1>;
  // <Consumer>
  //  {(value) => {
  //    return <h1>{value.name}</h1>;
  //  }}
  // </Consumer>
}

export default User;
