import React, { useState } from "react";
//import { connect } from "react-redux";
import { addUser } from "../actions";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  //const updateNameValue = () => {};
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: Math.random(),
        name: name,
      })
    );
  };
  return (
    <form>
      <input
        value = ""
        type="text"
        placeholder="New Task"
        value={name}
        className="new-task"
        //onChange={updateNameValue}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="send-container">
        <input className="send-button" type="submit" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default AddUser;

/*
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
*/
