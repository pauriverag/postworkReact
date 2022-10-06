import { useState } from "react";
import "./AddMeal.css"
function AddMeal(props){
    const submitHandler = ( event)=> {  
        event.preventDefault();
        props.onAddCart(cantidad);

        setCantidad("1")
    }

  
    const [cantidad, setCantidad] = useState();

    const amountChangeHandler = (event) => {
        setCantidad (event.target.value);

    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="add-meal">
                <label> Cantidad</label>
                <input defaultValue={1} value={cantidad} onChange={amountChangeHandler} className="cantidad" type="number"/>
                </div>
                <button className="button" type="submit"> Agregar</button>
            </form>
        </div>
    )
}

export default AddMeal;