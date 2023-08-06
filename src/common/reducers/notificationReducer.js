const initialState = {
    notification: null,
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_NOTIFICATIONS_SUCCESS":
        return {
          ...state,
          notification: action.payload,
        };
      case "DELETE_NOTIFICATIONS_SUCCESS":
        return {
          ...state,
          notification: null,
        };
      case "DELETE_NOTIFICATIONS_FAILURE":
      case "FETCH_NOTIFICATIONS_FAILURE":
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  