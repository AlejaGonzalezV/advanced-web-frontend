import React from "react";
import User from "./Users";
import { connect } from "react-redux";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} userId={user.id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = () => {};

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const component = wrapper(UsersList);

export default component;
