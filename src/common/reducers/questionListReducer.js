const initialState = {
  questionList: null,
};

const questionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUESTION_LIST_SUCCESS":
    case "FETCH_FILTERED_QUESTION_LIST_SUCCESS":
      return {
        ...state,
        questionList: action.payload,
      };
    case "FETCH_QUESTION_LIST_FAILURE":
    case "FETCH_FILTERED_QUESTION_LIST_FAILURE":
      return {
        ...state,
        questionList: [],
      };
    default:
      return state;
  }
};

export default questionListReducer;
