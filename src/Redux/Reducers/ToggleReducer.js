const initialState = {
  value: false,
};

// export const ToggleBtn = (state = initialState, action) => {
//   console.log(action.payload);
//   console.log(action.type);
//   if (action.type === "toggle") {
//     return state=false; // toggle the state value
//   }

//   return state;
// };

export const ToggleBtn = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        value: !state.value,
      };
    default:
      return state;
  }
};