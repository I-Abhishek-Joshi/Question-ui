import { fetchQuestion, fetchQuestionList, updateQuestionApi } from "../assets/constant/constants";

export const openLoginModal = () => {
  return {
    type: "OPEN_LOGIN_MODAL",
  };
};

export const closeLoginModal = () => {
  return {
    type: "CLOSE_LOGIN_MODAL",
  };
};

export const currentLocation = (location) => {
  return {
    type: "STORE_CURRENT_LOCATION",
    payload: location,
  };
};

export const updateQuestionAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await updateQuestionApi(payload);
      dispatch({
        type: "UPDATE_QUESTION_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_QUESTION_FAILURE",
      });
    }
  };
};

export const fetchQuestionAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetchQuestion(payload);
      dispatch({
        type: "FETCH_QUESTION_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_QUESTION_FAILURE",
      });
    }
  };
};

export const fetchQuestionListAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetchQuestionList(payload);
      dispatch({
        type: "FETCH_QUESTION_LIST_SUCCESS",
        payload: response.data
      });
    } catch {
      dispatch({
        type: "FETCH_QUESTION_LIST_FAILURE",
      });
    }
  };
};

export const setSearchTermAction = (searchTerm) => {
  return {
    type: "SEARCH_TERM",
    payload: searchTerm,
  };
};
