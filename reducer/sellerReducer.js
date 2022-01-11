export default function SellerReducer(state, action) {
  switch (action.type) {
    case "DELETE_SELLER":
      return {
        ...state,
        sellers: state.sellers.filter((seller) => seller.id !== action.payload),
      };
    case "ADD_SELLER":
      return {
        ...state,
        sellers: [...state.sellers, action.payload],
      };

    default:
      return state;
  }
}
