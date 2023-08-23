import axios from "axios";

//  = () => {
//   return { type: "Toggle" };
// };
export const ListToggle = () => {
  return {
    type: "toggle",
  };
};

// export const GetAllProduct = (setIsLoading) => {
//   return (dispatch) => {
//     axios
//       .get("https://dummyjson.com/products?limit=100")
//       .then((res) => {
//         dispatch({ type: "ALLPRODUCTS", payload: res.data });
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   };
// };

export const Categories = (payload) => {
  return {
    type: "CATEGORY",
    payload: payload,
  };
};

// export const GetAllProduct = (
//   setIsLoading,
//   setIsFetching,
//   CategoriesSelector
// ) => {
//   // add setIsFetching to the function parameters
//   return (dispatch) => {
//     if (CategoriesSelector === "") {
//       axios
//         .get("https://dummyjson.com/products?limit=100")
//         .then((res) => {
//           // console.log(res);
//           dispatch({ type: "ALLPRODUCTS", payload: res.data });
//           setIsLoading(false);
//           setIsFetching(false); // set isFetching to false after API call is complete
//         })
//         .catch((err) => {
//           alert(err.message);
//           setIsLoading(false);
//           setIsFetching(false); // set isFetching to false after API call is complete
//         });
//     } else {
//       setTimeout(() => {
//         axios
//           .get(`https://dummyjson.com/products/category${CategoriesSelector}`)
//           .then((res) => {
//             // console.log(res);
//             dispatch({ type: "ALLPRODUCTS", payload: res.data });
//             setIsLoading(false);
//             setIsFetching(false); // set isFetching to false after API call is complete
//           })
//           .catch((err) => {
//             alert(err.message);
//             setIsLoading(false);
//             setIsFetching(false); // set isFetching to false after API call is complete
//           });
//       }, 500);
//     }
//   };
// };

export const GetAllProduct =
  (categoriesSelector, setIsLoading) => async (dispatch) => {
    try {
      const url =
        categoriesSelector !== ""
          ? `https://dummyjson.com/products/category${categoriesSelector}`
          : "https://dummyjson.com/products?limit=100";
      const response = await axios.get(url);
      dispatch({ type: "ALL_PRODUCTS", payload: response.data });
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

// export const GetProductDetail = (productId) => {
//   console.log("data received", productId)
//   return (dispatch) => {
//     axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
//       // console.log("this is dat",data);
//       dispatch({ type: "PRODUCTDETAIL", payload: res.data });
//     });
//   };
// };

export const GetProductDetail = (productId) => {
  // console.log("data received", productId)
  return (dispatch) => {
    if (!productId || productId <= 0) {
      dispatch({ type: "CLEAR_PRODUCT_DETAIL" });
      return;
    }
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        // console.log("this is dat",data);
        dispatch({ type: "PRODUCT_DETAIL", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// ------This function is add to cart start here ------//

export const AddToCartAction = (cartId) => {
  // console.log("this is card", cartId);
  if (!cartId) {
    return { type: "NOT_ADD_TO_CART" };
  }
  return (dispatch) => {
    axios
      .get(`https://dummyjson.com/products/${cartId}`)
      .then((res) => {
        dispatch({ type: "ADD_TO_CART", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const RemoveFromCartAction = (id) => {
  console.log("remove id", id);
  return { type: "REMOVE_FROM_CART", payload: id };
};

export const IncrementQty = (id) => {
  console.log("increment id", id);
  return { type: "INCREMENT_QTY", payload: id };
};
export const DecrementQty = (id) => {
  console.log("decrement id", id);
  return { type: "DECREMENT_QTY", payload: id };
};

// ------This function is add to cart end here ------//

