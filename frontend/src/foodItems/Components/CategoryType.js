import React from "react";
import './CategoryType.css'
import Itemcard from "./Itemcard";
import menuItems from "../Arrays/menuitems";


export default function CategoryType(props){
    function createItemCard(item){
        return (props.name==item.category)&&(<Itemcard id={item.id} name={item.name} price={item.price} />)
    }

    return (
        <div>
            <h2 className="category-name">{props.name}</h2>
            <svg width="831" height="4" viewBox="0 0 831 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H829" stroke="black" stroke-width="3.2447" stroke-linecap="round"/>
            </svg>
            <div className="item-container">
                {menuItems.map(createItemCard)}
            </div>
        </div>
    )
}