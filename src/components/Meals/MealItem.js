import "./MealItem.css"
import AddMeal from "../AddMeal/AddMeal";
function MealItem (props){
    return(
        <div className="card">
        <img src={props.img} width="100%"/>   
            <div className="body-card"> 
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="add-cart">
                <p className="precio">${props.price}</p>
                <AddMeal onAddCart= {props.onAddCart}/>
                </div>
               
            </div> 
         </div>
     
    );
}
export default MealItem;