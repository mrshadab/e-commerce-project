const initialState = {
  value: false,
};


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