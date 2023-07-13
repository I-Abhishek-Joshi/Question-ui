import axios from "axios";
import Cookies from "js-cookie";

export const ALL_QUESTIONS_API = "http://localhost:8080/all/questions";
export const QUESTION_API = "http://localhost:8080/question/";
export const LOGIN_API = "http://localhost:8080/api/v1/auth/authenticate";
export const ANSWER_API = "http://localhost:8080/add/answer/";
export const DELETE_ANSWER_API = "http://localhost:8080/delete/answer";
export const ADD_QUESTION_API = "http://localhost:8080/add/question";
export const UPDATE_QUESTION_API = "http://localhost:8080/update/question";

export const setTokenCookie = (data) => {
  Cookies.set("jwtToken", data.token);
  Cookies.set("userId", data.userId);
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

export const updateQuestionApi = ({ questionId, userId, voteType }) => {
  return new Promise((resolve, reject) => {
    axios.patch(
      UPDATE_QUESTION_API,
      {
        "questionId": questionId,
        "userId" : userId,
        "voteType": voteType
      },
      {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      }
    ).then((response) => {
      if(response.status === 200) {
        resolve(response)
      } else {
        reject(response)
      }
    }).catch((error) => {
      reject(error)
    });
  });
};

export const fetchQuestion = async ({ questionId }) => {
  return new Promise((resolve, reject) => {
    const url = QUESTION_API + questionId;
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${getTokenCookie()}`,
      },
    }).then((response) => resolve(response))
    .catch((error) => reject(error));
  })
};
