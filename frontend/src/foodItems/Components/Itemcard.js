import React from "react";
import './Itemcard.css'

export default function Itemcard(props){
    return (
        <div className="item-card">
            <img />
            <div className="bottom-part" >
                <p>{props.name}</p>
                <p className="price">{props.price}</p>
                <button>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8.5V25.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
                    <path d="M25.5 17L8.5 17" stroke="white" stroke-width="5" stroke-linecap="round"/>
                    </svg>
                </button>

            </div>
        </div>
    );
}