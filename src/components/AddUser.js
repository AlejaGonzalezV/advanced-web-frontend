import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions";

//const AddUser = () => {};

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  updateNameValue(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addUser({ id: Math.random(), name: this.state.name });
    this.setState({ name: "" });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateNameValue.bind(this)}
        />
        <input type="submit" onClick={this.onSubmit.bind(this)} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
