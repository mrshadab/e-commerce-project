// const initial=[]

// const ProductDetailReducer = (state = initial, action) => {
//     // console.log("this payloda",action.payload);
//     if (action.type === "PRODUCTDETAIL") {
//       return state = action.payload;
//     }
//     return state;
//   };
//   export default ProductDetailReducer;


const ProductDetailReducer = (state = null, action) => {
  switch(action.type) {
    case "PRODUCT_DETAIL":
      return action.payload;
    case "CLEAR_PRODUCT_DETAIL":
      return null;
    default:
      return state;
  }
};

export default ProductDetailReducer;