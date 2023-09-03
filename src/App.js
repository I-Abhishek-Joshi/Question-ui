import React from "react";
import "./App.css";
import Header from "./common/components/Header/header";
import Footer from "./common/components/Footer/footer";
import Home from "./common/Pages/Home/home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Details from "./common/Pages/Details/details";
import LoginModal from "./common/components/LoginModal/loginModal";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Login from "./common/Pages/Login/login";
import Register from "./common/Pages/Register/register";
import { isUserAuthenticated } from "./common/utils/utils";
import NoPage from "./common/Pages/NoPage/noPage";
import ListLoader from "./common/Pages/ListLoader/listLoader";

function App() {
  const isLoginModalOpen = useSelector((state) => state.modal.isLoginModalOpen);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className={`App ${isAuthPage ? "auth" : "app"}`}>
      {isLoginModalOpen && (
        <Grid position={"fixed"} zIndex={"999"} width={"100%"} height={"100%"}>
          <LoginModal />
        </Grid>
      )}
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:questionId"
          element={
            isUserAuthenticated() ? <Details /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<ListLoader />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
