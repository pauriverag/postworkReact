import Meals from "../Meals/Meals";
import Cart  from "../Cart/Cart";
import {useState} from "react";
function App() {

  const [cart, setCart] = useState(0);

  const addCartHandler = (number) => {
     setCart ((prevState) => parseInt(number) + parseInt(prevState))
   }
  return (
    <div>
      <Cart carrito = {cart}/>
      <Meals onAddCart = {addCartHandler}/>
    </div>
 
  
  )
}
export default App;