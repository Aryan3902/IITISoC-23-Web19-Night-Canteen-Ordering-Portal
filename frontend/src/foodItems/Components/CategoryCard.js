import React from "react";
import './CategoryCard.css'

export default function CategoryCard(props){
    return (
        <button className="category-card">{props.name}</button>       
    );
}