const initialState = {
  filter: {
    searchTerm: null,
    value: null,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
