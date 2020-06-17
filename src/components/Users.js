import React from "react";

class User extends React.Component {
  render() {
    const name = this.props.name;
    return <li>{name}</li>;
  }
}

export default User;
/*
function User(props) {
    return <li>{props.name}</li>
}
*/

/*
const User = (props) => <li>{props.name}</li>;
*/
