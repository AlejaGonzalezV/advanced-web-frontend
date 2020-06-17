import React from "react";
import User from "./User";

const users = [
  {
    id: 1,
    name: "Javier",
  },
  {
    id: 2,
    name: "Luis",
  },
];

function UsersList() {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
}

export default UsersList;
