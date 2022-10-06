
import MealItem from "./MealItem";
import "./MealItem.css"


function Meals(props) {
    const cafes = [
        {
            categoria: "Cafes",
            name : "Caramel Macciato",
            desc : "Cafe tipo Macciato con topping de caramelo",
            img : "https://tse1.mm.bing.net/th/id/OIP.nb-IB_qdi_-Wx33Z-X9CrAHaHa?pid=ImgDet&rs=1",
            price: 120,
        },

        {
            categoria: "Cafes",
            name : "Green Tea Cream",
            desc : "Donuts glaseadas y de sabores",
            img: "https://th.bing.com/th/id/R.4e2a624694eaa5b51723b1580c11ae7c?rik=6T3w1kP0%2fOFQOg&pid=ImgRaw&r=0",
            price: 125,
        },
    
        {
            categoria: "Cafes",
            name : "Mocha blanco",
            desc : "Hamburguesas y malteadas miusukdnsmddfdfs",
            img: "https://tse1.mm.bing.net/th/id/OIP.aMFbH8vxa7WXI6Zj9hcAYQHaHa?pid=ImgDet&rs=1",
            price: 125,
        },
    
        {
            categoria: "Cafes",
            name : "Strawberry Cream",
            desc : "Cafeteria, bebidas refrescantes y postres ",
            img: "https://img.buzzfeed.com/buzzfeed-static/static/2019-05/2/14/asset/buzzfeed-prod-web-04/sub-buzz-25834-1556822420-8.png",
            price: 80,
        },
    
    ];

    const hamburguesas = [
        {
            categoria: "Hamburguesas",
            name : "Big Mag",
            desc : "Big Mac clasica hamburguesa de carne de res con queso",
            img : "https://th.bing.com/th/id/R.0fbfd977948d3f8424ede3b305187c1f?rik=9YkJcN55oBpblQ&pid=ImgRaw&r=0",
            price: 120,
        },

        {
            categoria: "Hamburguesas",
            name : "Club House",
            desc : "Donuts glaseadas y de sabores",
            img: "https://th.bing.com/th/id/R.8ab78396f8f2226c7e4f0a3da92ec8fe?rik=O1NykCrIY3TT8A&pid=ImgRaw&r=0",
            price: 125,
        },
    
        {
            categoria: "Hamburguesas",
            name : "Sunday",
            desc : "Hamburguesas y malteadas miusukdnsmddfdfs",
            img: "https://th.bing.com/th/id/R.afdc70c9d4930b155b0082d994d131d9?rik=h9EKafcvk29vgQ&pid=ImgRaw&r=0",
            price: 125,
        },
    
        {
            categoria: "Hamburguesas",
            name : "McDesayuno",
            desc : "Cafeteria, bebidas refrescantes y postres ",
            img: "https://tse3.mm.bing.net/th/id/OIP.Hgb-4QHpQx2rZxN7tNJTRQHaE6?pid=ImgDet&rs=1",
            price: 80,

        }
    ]

    const  sushi = [
        {
            categoria: "Sushi",
            name : "Rollo empanizado",
            desc : "Rollo con cubierta empanizada",
            img : "https://th.bing.com/th/id/R.94c08297fa0e09ee6d45b933da9961d3?rik=98ADYVa27V7UVw&pid=ImgRaw&r=0",
            price: 120,
        },

        {
            categoria: "Sushi",
            name : "Rollo California",
            desc : "Donuts glaseadas y de sabores",
            img: "https://tse2.mm.bing.net/th/id/OIP.e8fq3PIAtq0gh4PYkXNmFAHaE8?pid=ImgDet&rs=1",
            price: 125,
        },
    
        {
            categoria: "Sushi",
            name : "Roll Bowl",
            desc : "Hamburguesas y malteadas miusukdnsmddfdfs",
            img: "https://th.bing.com/th/id/R.ed1e2af064eefdb96278d4c66b03eac4?rik=%2fswpR5r0P31QCA&pid=ImgRaw&r=0",
            price: 125,
        },
    
        {
            categoria: "Sushi",
            name : "Salmom Sashimi",
            desc : "Cafeteria, bebidas refrescantes y postres ",
            img: "https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2020/03/sushi-94.jpg?quality=90&strip=all&ssl=1",
            price: 80,

        }

     
    ]

    const comidas = [cafes, hamburguesas, sushi];
    return (
        <>
        {
            comidas.map((categoria) => {
                return(
                <div className="contenedor">
                    <h2 className="titulo-categoria">{categoria[0].categoria}</h2>
                    <div className="main">
                    {
                        categoria.map((platillo)=>{
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
                )
            })
        }
        </>
        
    );   
}

export default Meals;