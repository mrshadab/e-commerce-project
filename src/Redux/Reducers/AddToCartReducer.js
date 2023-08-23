const initialState = [];

// const AddToCartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const productWithQty = { ...action.payload, qty: 1 }; // add quantity property to the product
//       return [...state, productWithQty]; // add new product to the existing cart
//     case "REMOVE_FROM_CART":
//       return state.filter((product) => product.id !== action.payload);
//     case "NOT_ADD_TO_CART":
//       return state;
//     default:
//       return state;
//   }
// };

const AddToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const productWithQty = { ...action.payload, qty: 1 }; // add quantity property to the product
        return [...state, productWithQty]; // add new product to the existing cart
      }

    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload);

    case "INCREMENT_QTY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );

    case "DECREMENT_QTY":
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );

    case "NOT_ADD_TO_CART":
      return state;
    default:
      return state;
  }
};

export default AddToCartReducer;
