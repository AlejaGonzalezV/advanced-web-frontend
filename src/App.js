import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <h1 className="title">To-Do List</h1>
          <AddUser />
        </div>
        <br />
        <br />
        <UsersList />
      </div>
    </body>
  );
}

export default App;
