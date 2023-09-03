import axios from "axios";
import Cookies from "js-cookie";


const URL = "https://question-bank-uzfm.onrender.com";
export const ALL_QUESTIONS_API = URL + "/all/questions";
export const QUESTION_API = URL + "/question/";
export const LOGIN_API = URL + "/api/v1/auth/authenticate";
export const REGISTER_API = URL + "/api/v1/auth/register";
export const ANSWER_API = URL + "/add/answer/";
export const DELETE_ANSWER_API = URL + "/delete/answer";
export const ADD_QUESTION_API = URL + "/add/question";
export const UPDATE_QUESTION_API = URL + "/update/question";
export const FETCH_LOGGED_IN_USER_API = URL + "/user";
export const FETCH_NOTIFICATION = URL + "/notification";
export const DELETE_QUESTION_API = URL + "/delete/question/"


export const setTokenCookie = (data) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 60 * 24);

  Cookies.set("jwtToken", data.token, { expires: expirationDate });
  Cookies.set("userId", data.userId, { expires: expirationDate });
};

export const getTokenCookie = () => {
  return Cookies.get("jwtToken");
};

export const getLoggedInUserId = () => {
  return Cookies.get("userId");
};

export const deleteTokenCookie = () => {
  Cookies.remove("jwtToken");
  Cookies.remove("userId");
};

export const updateQuestionApi = ({
  questionId,
  userId,
  voteType,
  favourite,
  tagList,
  questionTitle,
  questionDescription
}) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        UPDATE_QUESTION_API,
        {
          questionId: questionId,
          userId: userId,
          voteType: voteType,
          favourite: favourite,
          tagList: tagList,
          questionTitle: questionTitle,
          questionDescription: questionDescription
        },
        {
          headers: {
            Authorization: `Bearer ${getTokenCookie()}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fetchQuestion = async ({ questionId }) => {
  return new Promise((resolve, reject) => {
    const url = QUESTION_API + questionId;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fetchQuestionList = async ({ searchTerm, userId, filters }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(ALL_QUESTIONS_API, {
        searchTerm: searchTerm,
        userId: userId,
        filters: filters,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fetchLoggedInUser = async ({ userId }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(FETCH_LOGGED_IN_USER_API + `?userId=${userId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const fetchNotifications = async ({ userId }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(FETCH_NOTIFICATION + `?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const deleteNotifications = async ({ userId }) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(FETCH_NOTIFICATION, {
        data: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
