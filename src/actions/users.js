import { ADD_USER, UPDATE_USER, DELETE_USER } from "./index";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
