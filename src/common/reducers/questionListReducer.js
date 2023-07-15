const initialState = {
    questionList: [],
  };
  
  const questionListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_QUESTION_LIST_SUCCESS":
        return {
          ...state,
          questionList: action.payload,
        };
      case "FETCH_QUESTION_LIST_FAILURE": 
      default:
        return state;
    }
  };
  
  export default questionListReducer;
  