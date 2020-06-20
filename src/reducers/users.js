import { ADD_USER, UPDATE_USER, DELETE_USER } from "../actions";

const initialState = [
  {
    id: 1,
    name: "Lavar los platos",
  },
  {
    id: 2,
    name: "Lavar la ropa",
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
      const newState2 = state.filter((user) => user.id !== payload);
      return newState2;

    default:
      return state;
  }
};

export default users;
