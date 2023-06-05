import React from "react";
import PostUser from "./PostUser/postUser";
import { RxCross2 } from 'react-icons/rx'
import './cardHeader.css'
import "../../components/global.css"

const CardHeader = () => {
    return (
        <div className="card-header-container">
            <PostUser/>
            <RxCross2 size={25} className="item-basic cross"/>
        </div>
    )
}

export default CardHeader;