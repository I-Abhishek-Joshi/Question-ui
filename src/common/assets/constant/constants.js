import Cookies from "js-cookie";

export const ALL_QUESTIONS_API = "http://localhost:8080/all/questions";
export const QUESTION_API = "http://localhost:8080/question/";
export const LOGIN_API = "http://localhost:8080/api/v1/auth/authenticate"
export const ANSWER_API = "http://localhost:8080/add/answer/"
export const DELETE_ANSWER_API = "http://localhost:8080/delete/answer"


export const setTokenCookie = (data) => {
  Cookies.set("jwtToken", data.token);
  Cookies.set("userId", data.userId)
};

export const getTokenCookie = () => {
  return Cookies.get("jwtToken");
};

export const getLoggedInUserId = () => {
  return Cookies.get("userId");
}

export const deleteTokenCookie = () => {
  Cookies.remove("jwtToken");
  Cookies.remove("userId");
};
