const initialState = {
  currentLocation: "",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
      };

    default:
      return state;
  }
};

export default locationReducer;
