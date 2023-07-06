import React, { useState } from "react";
import "./App.css";
import Header from "./common/components/Header/header";
import Footer from "./common/components/Footer/footer";
import Home from "./common/Pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Details from "./common/Pages/Details/details";
import LoginModal from "./common/components/LoginModal/loginModal";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const isLoginModalOpen = useSelector((state) => state.toggleLoginModalReducer.isLoginModalOpen)
  
  return (
    <div className="App">
      {
          isLoginModalOpen && (<Grid position={'fixed'} zIndex={'999'} width={'100%'} height={'100%'}>
          <LoginModal />
        </Grid>)
      }
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:questionId" element={<Details />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
