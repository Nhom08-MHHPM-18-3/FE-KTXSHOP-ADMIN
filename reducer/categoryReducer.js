export default function CategoryReducer(state, action) {
  switch (action.type) {
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case "EDIT_CATEGORY":
      const updatedCategory = action.payload;

      const updatedCategories = state.categories.map((category) => {
        if (category.id === updatedCategory.id) {
          return updatedCategory;
        }
        return category;
      });

      return {
        ...state,
        categories: updatedCategories,
      };

    default:
      return state;
  }
}
