import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions';

function User(props) {
  const [color, setColor] = useState("#cccccc"); // ES6
  const { name, userId } = props;
  const dispatch = useDispatch();

  const onPressButton = () => {
    dispatch(deleteUser(userId));
  };

  return (
    <li style={{ backgroundColor: color }}>
      {name}
      <button onClick={onPressButton}>Delete</button>
    </li>
  );
}

/*
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "#cccccc",
    };
  }

  onPressButton() {
    this.setState({
      color: "#000",
    });
  }

  componentDidMount(){
    // una vez el render haya terminado
  }

  render() {
    const name = this.props.name;
    return (
      <li style={{ backgroundColor: this.state.color }}>
        {name}
        <button onClick={this.onPressButton.bind(this)}>Change Color</button>
      </li>
    );
  }
}
*/
export default User;
