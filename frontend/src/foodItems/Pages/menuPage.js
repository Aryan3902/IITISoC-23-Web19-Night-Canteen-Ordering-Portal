import React, {useState} from "react";
import './menuPage.css'


import Cart from "../Components/Cart";
import FoodItems from "../Components/FoodItems";



export default function MenuPage(){
    const [cart, setCart]=useState([]);
    const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {
            setCart([...cart,item]);
        }
    }
    return (
        <div className="box">
            <div className="first-column">
               <FoodItems handleClick={handleClick}/>
            </div>
            <div className="second-column">
            </div>
            <div className="third-column">
                <Cart size={cart.length} cart={cart}/>
            </div>
        </div>
    );
}