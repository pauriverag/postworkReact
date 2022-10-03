
import MealItem from "./MealItem";
import "./MealItem.css"


function Meals(props) {
    const comidas = [
        {
            name : "KFC",
            desc : "Cadena de restaurantes especializada en pollo frito",
            img : "https://tse3.mm.bing.net/th/id/OIP.IMhG6r7tinkwOLd_vPBVYwHaEc?pid=ImgDet&rs=1",
            price: 120,
        },

        {
            name : "Krispy Kreme",
            desc : "Donuts glaseadas y de sabores",
            img: "https://www.bakingbusiness.com/ext/resources/2020/6/Dessert-Doughnuts_Lead.png?1591711540",
            price: 25,
        },
    
        {
            name : "McDonald's",
            desc : "Hamburguesas y malteadas",
            img: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/dayton/McDonalds0-704cd8c35056a36_704cda80-5056-a36a-060ce8c0aa927d34.jpg",
            price: 125,
        },
    
        {
            name : "Starbucks",
            desc : "Cafeteria, bebidas refrescantes y postres ",
            img: "https://th.bing.com/th/id/R.d1a24dcd0ee46cc7489bb5fc2bdb524c?rik=qxgzJZ7e2m4KTA&riu=http%3a%2f%2fwww.victoriabuzz.com%2fwp-content%2fuploads%2f2019%2f05%2fStarbucks.jpg&ehk=diEUmaQqyqM%2bWQXzSkF%2fXVY24gZ69G0aao5cLVRI3q8%3d&risl=&pid=ImgRaw&r=0",
            price: 80,
        },
    
    ];


    return (
        <div>
        <div className="main">
            {
                comidas.map((platillo)=>{
                    return(
                        
                            <MealItem onAddCart = {props.onAddCart}
                            name={platillo.name}
                            description={platillo.desc}
                            img={platillo.img}
                            price={platillo.price}
                            />
                       
                    )
                }) 
            }
        </div>
        </div>
    );   
}

export default Meals;