import React, { createContext, useReducer } from "react";
import CategoryReducer from "../reducer/categoryReducer";

//initstate
const initialState = {
  categories: [
    {
      id: "1",
      categoryName: "Đồ ăn",
      countProducts: 5,
    },
    {
      id: "2",
      categoryName: "Đồ Dùng",
      countProducts: 12,
    },
  ],
};

//Create context
export const CategoryContext = createContext(initialState);

//Provider Component
export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  //action
  function deleteCategory(id) {
    dispatch({
      type: "DELETE_CATEGORY",
      payload: id,
    });
  }
  function addCategory(category) {
    dispatch({
      type: "ADD_CATEGORY",
      payload: category,
    });
  }

  function editCategory(category) {
    dispatch({
      type: "EDIT_CATEGORY",
      payload: category,
    });
  }

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        deleteCategory,
        addCategory,
        editCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
