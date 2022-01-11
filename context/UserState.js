import React, { createContext, useReducer } from "react";
import UserReducer from "../reducer/userReducer";

const initialState = {
  users: [
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phoneNumber: "1230123456",
      address: "Thủ Đức, Hồ Chí Minh",
    },
  ],
};

//Create context
export const UserContext = createContext(initialState);

//Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //action
  function deleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }

  return (
    <UserContext.Provider
      value={{
        user: state.users,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
