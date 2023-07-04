import React from "react";
import "./App.css";
import Header from "./common/components/Header/header";
import Footer from "./common/components/Footer/footer";
import Home from "./common/Pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Details from './common/Pages/Details/details'
import LoginModal from "./common/components/LoginModal/loginModal";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:questionId" element={<Details/>}/>
        <Route path="/login" element={<LoginModal/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default React.memo(App) ;
