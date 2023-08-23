const initial = [];

const AllProductReducer = (state = initial, action) => {
  if (action.type === "ALL_PRODUCTS") {
    return state = action.payload;
  }
  return state;
};
export default AllProductReducer;

