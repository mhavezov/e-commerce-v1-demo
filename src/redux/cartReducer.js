export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const isInCart = state.find(
        item => item.id === action.payload.id
      );
      if (isInCart) {
        return state.map(item =>
          item.id === isInCart.id
            ? {
                ...item,
                qty: action.payload.qty + item.qty,
              }
            : item
        );
      }
      return [...state, action.payload];
    case 'CART_REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
