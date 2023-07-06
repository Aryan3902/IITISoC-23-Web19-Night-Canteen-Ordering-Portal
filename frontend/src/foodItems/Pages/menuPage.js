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

    const handleChange =(item, d)=>{
        let ind = -1;
		cart.forEach((data, index)=>{
        
            
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
    }

    return (
        <div className="box">
            <div className="first-column">
               <FoodItems handleClick={handleClick}/>
            </div>
            <div className="second-column">
            </div>
            <div className="third-column">
                <Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>
            </div>
        </div>
    );
}