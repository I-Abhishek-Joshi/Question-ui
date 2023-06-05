import React from "react";
import face from "../../../assets/images/face.jpg"
import './postUser.css'
import "../../../components/global.css"

const PostUser = (props) => {
  return (
    <div className="post-user-container">
        <img src={face} alt="img" className="post-img"/>
        <div className="post-user-body">
            <p className="post-user-name">Abhishek Joshi</p>
            <p className="post-user-date">1 d</p>
        </div>
    </div>
  );
};

export default PostUser;
