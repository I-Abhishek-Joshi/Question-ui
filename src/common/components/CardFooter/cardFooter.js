import React from "react";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

import "./cardFooter.css";
import "../../components/global.css"

const CardFooter = () => {
  return (
    <div className="card-footer-container item-basic">
      <div className="card-footer-top">
        <div className="item ">
          <BsFillHandThumbsUpFill className="icon"></BsFillHandThumbsUpFill>
          <p className="count">150</p>
        </div>
        <div className=" count">53 comments</div>
      </div>
      <div class="line"></div>
      <div className="card-footer-bottom">
        <div className="item align hover">
          <BsHandThumbsUp className="icon"/>
          <p className="item-hover">Like</p>
        </div>
        <div className="item align hover">
          <BiComment className="icon"></BiComment>
          <p className="item-hover">Comment</p>
        </div>
        <div className="item align hover">
          <RiShareForwardLine className="icon"></RiShareForwardLine>
          <p className="item-hover"> Share</p>
        </div>
      </div>
    </div>
  );
};
export default CardFooter;
