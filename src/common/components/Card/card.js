import React from "react";
import './card.css'
import CardFooter from "../CardFooter/cardFooter";
import CardHeader from "../CardHeader/cardHeader";
import "../../components/global.css"
const Card = () => {
  return (
    <div className="card-container" >
        <CardHeader></CardHeader>
        <div className="post-container">
            First Trip on My Super Meteor 650, Seeking Suggestions: Hi All, I have
            to travel to Delhi from Gorakhpur. (751kms) It will be my first trip on
            my brand new SM650 ❤️ picture attached. Planning to start early in the
            morning and reach by night. Need some help : 1- Do I need a Fastag for
            Expressway ? 2- Though tyres are best in the segment how often do I need
            to rest the engine & tyre in this weather ? 3- Any other tips ... Thanks
            in advance...!
        </div>
        <CardFooter></CardFooter>
    </div>
  );
};

export default Card;
