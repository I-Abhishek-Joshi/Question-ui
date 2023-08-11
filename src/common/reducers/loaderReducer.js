const initialState = {
  listLoader: true,
  detailsLoader: true,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIST_LOADER":
      return {
        ...state,
        listLoader: action.payload,
      };
    case "TOGGLE_DETAILS_LOADER":
      return {
        ...state,
        detailsLoader: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;
