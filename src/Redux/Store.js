// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { RootReducer } from "./Reducers/combineReducer";

// export const Store = createStore(
//   RootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );


import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./Reducers/combineReducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
