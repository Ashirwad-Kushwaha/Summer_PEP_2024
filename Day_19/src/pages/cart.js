import { useContext } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import AppContext from "../context/appContext";
import "../../globalStyle.css";
import useCart from "../hooks/useCart";

const Cart = ()=>{

    const {cart} = useContext(AppContext);
    


    return(
        <>
        <Navbar/>
        <CategoryBar/>

        <p>Hello there</p>
        <div className="cart">
        {
            cart.map((elem)=>{
                return(
                    <div className="cartItem">
                    <img src={elem.img} alt="" />
                    <div className="des">
                    <p>{elem.title}</p>
                    <p>{elem.price}</p>
                    <p>{elem.count}</p>
                    </div>
                    </div>
                ) 
            })
        }
        </div>
        </>
    )
}

export default Cart;
