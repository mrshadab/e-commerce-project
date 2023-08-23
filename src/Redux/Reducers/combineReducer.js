import { combineReducers } from "redux";
import { ToggleBtn } from "./ToggleReducer";
import AllProductReducer from "./AllProductReducer";
import AllCategories from "./CategoryReducer";
import ProductDetailReducer from "./ProductDetailReducer";
import AddToCartReducer from "./AddToCartReducer";

export const RootReducer = combineReducers({
  listToggle: ToggleBtn,
  AllProduct: AllProductReducer,
  Categories: AllCategories,
  ProductDetail: ProductDetailReducer,
  Cart: AddToCartReducer,

});
