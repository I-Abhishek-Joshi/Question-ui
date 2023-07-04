import Cookies from "js-cookie";

export const ALL_QUESTIONS_API = "http://localhost:8080/all/questions";
export const QUESTION_API = "http://localhost:8080/question/";

export const setTokenCookie = (token) => {
  Cookies.set("jwtToken", token);
};

export const getTokenCookie = () => {
  return Cookies.get("jwtToken");
};

export const deleteTokenCookie = () => {
  Cookies.remove("jwtToken", { path: "/" });
};
