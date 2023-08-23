const initial=""

const AllCategories = (state = initial, action) => {
    if (action.type === "CATEGORY") {
        // console.log(action.payload);
        return state = action.payload;
    }
    return state;
  };
  export default AllCategories;