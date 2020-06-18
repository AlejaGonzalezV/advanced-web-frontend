import { ADD_USER, UPDATE_USER, DELETE_USER } from "../actions";

const initialState = [
  {
    id: 1,
    name: "Javier",
  },
  {
    id: 2,
    name: "Luis",
  },
];

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      const newState = [...state, payload];
      return newState;

    case UPDATE_USER:
      return state;

    case DELETE_USER:
      return state;

    default:
      return state;
  }
};

export default users;
