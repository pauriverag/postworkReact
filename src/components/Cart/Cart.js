
import "./Cart.css"
import Modal from "../UI/Modal"
import { useState } from "react";


function Cart (props) {
    const [isOpen ,setIsOpen] = useState(false);
    const toggleModal = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <>
           {
               isOpen && (
                <Modal onClick={toggleModal} title="Carrito" message="producto" />
               )
           }

           <div  className="menu" >
            <div onClick={toggleModal} className="cart">
                    <i className="fas fa-shopping-cart"></i>     
                    <h3>Carrito</h3>
                    <p className="cart-number"> {props.carrito}</p>
                   
            </div>
            <img src={'images/cut-logo.png'} width="250px"/>
            
            <div className="cart-location">
                <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>León</h4>
                </div>
                <div className="search">
                        <i className="fas fa-search"></i>
                        <h4>Comida...</h4>
                    </div>
            </div>
            
        </div>
        </>  
    )
}

export default Cart;