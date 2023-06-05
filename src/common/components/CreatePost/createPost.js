import React from "react";
import face from '../../assets/images/face.jpg'
import './createPost.css'

const CreatePost = () => {
    return(
        <div className="create-post-container">
            <img src={face} alt="img" className="post-img"/>
            <input type="text" class="question-post" placeholder="Whats in your mind, Abhishek"></input>
        </div>
    )
}
export default CreatePost;