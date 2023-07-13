const initialState = {
  questionDetail: {},
};

const questionDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_QUESTION_SUCCESS":
      return {
        ...state,
        questionDetail: action.payload,
      };
    case "FETCH_QUESTION_SUCCESS": 
      return {
        ...state,
        questionDetail: action.payload
      }
    case "UPDATE_QUESTION_FAILURE":
    case "FETCH_QUESTION_FAILURE":
    default:
      return state;
  }
};

export default questionDetailReducer;
