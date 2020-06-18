import React, { useState } from "react";

function User(props) {
  const [color, setColor] = useState("#cccccc"); // ES6
  const { name } = props;

  const onPressButton = () => {
    setColor("#000");
  };

  return (
    <li style={{ backgroundColor: color }}>
      {name}
      <button onClick={onPressButton}>Change Color</button>
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
