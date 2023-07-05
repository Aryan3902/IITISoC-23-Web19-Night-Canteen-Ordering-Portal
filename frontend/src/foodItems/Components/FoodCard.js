import React from "react";
import "./FoodCard.css";

export default function FoodCard(props){
    return (
        <div className="food-card-container">
            <div className="circle"></div>
            <div >
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <div className="number-button-container">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="15" height="15" rx="2" fill="white"/>
                <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p>0</p>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="15" height="15" rx="2" fill="white"/>
                <path d="M7.5 4V11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </div>
        </div>
    );
}