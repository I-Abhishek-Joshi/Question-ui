import {
  fetchLoggedInUser,
  fetchNotifications,
  fetchQuestion,
  fetchQuestionList,
  updateQuestionApi,
} from "../assets/constant/constants";

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
      dispatch({
        type: "TOGGLE_DETAILS_LOADER",
        payload: true
      });
      const response = await updateQuestionApi(payload);
      dispatch({
        type: "UPDATE_QUESTION_SUCCESS",
        payload: response.data,
      });
      dispatch({
        type: "TOGGLE_DETAILS_LOADER",
        payload: false
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
      dispatch({
        type: "TOGGLE_DETAILS_LOADER",
        payload: true
      });
      const response = await fetchQuestion(payload);
      dispatch({
        type: "TOGGLE_DETAILS_LOADER",
        payload: false
      });
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
      dispatch({
        type: "TOGGLE_LIST_LOADER",
        payload: true,
      });
      const response = await fetchQuestionList(payload);
      dispatch({
        type: "TOGGLE_LIST_LOADER",
        payload: false,
      });
      dispatch({
        type: "FETCH_QUESTION_LIST_SUCCESS",
        payload: response.data,
      });
    } catch {
      dispatch({
        type: "FETCH_QUESTION_LIST_FAILURE",
      });
    }
  };
};

export const setFilterAction = (payload) => {
  return {
    type: "SET_FILTER",
    payload: payload,
  };
};

export const fetchLoggedInUserAction = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetchLoggedInUser({ userId });
      dispatch({
        type: "FETCH_LOGGED_IN_USER_SUCCESS",
        payload: response.data,
      });
    } catch {
      dispatch({
        type: "FETCH_LOGGED_IN_USER_FAILURE",
      });
    }
  };
};

export const removeLoggedInUser = () => {
  return {
    type: "REMOVE_LOGGED_IN_USER",
  };
};

export const fetchNotificationsAction = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetchNotifications({ userId });
      dispatch({
        type: "FETCH_NOTIFICATIONS_SUCCESS",
        payload: response.data,
      });
    } catch {
      dispatch({
        type: "FETCH_NOTIFICATIONS_FAILURE",
      });
    }
  };
};

export const deleteNotificationsAction = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_NOTIFICATIONS_SUCCESS",
      });
    } catch {
      dispatch({
        type: "DELETE_NOTIFICATIONS_FAILURE",
      });
    }
  };
};
