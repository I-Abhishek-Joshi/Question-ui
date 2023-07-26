const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_LOGGED_IN_USER_SUCCESS":
          return {
            ...state,
            user: action.payload,
          };
        case "REMOVE_LOGGED_IN_USER": 
        return {
            ...state,
            user: null
        }
        case "FETCH_LOGGED_IN_USER_FAILURE": 
        default:
          return state;
      }
  };
  
  export default userReducer;
  
