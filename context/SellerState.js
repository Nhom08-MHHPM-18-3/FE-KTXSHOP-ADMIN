import React, { createContext, useReducer } from "react";
import SellerReducer from "../reducer/sellerReducer";

const initialState = {
  sellers: [
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
export const SellerContext = createContext(initialState);

//Provider Component
export const SellerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SellerReducer, initialState);

  //action
  function deleteUser(id) {
    dispatch({
      type: "DELETE_SELLER",
      payload: id,
    });
  }
  function addSeller(seller) {
    dispatch({
      type: "ADD_SELLER",
      payload: seller,
    });
  }

  return (
    <SellerContext.Provider
      value={{
        sellers: state.sellers,
        deleteUser,
        addSeller,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};
