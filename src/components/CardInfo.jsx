import { useState } from "react";
import "/public/style/cardInfo.css"

const cards = [
    {
        "id":0,
        "date":"26 Mars 2024",
        "src":"/public/img/goku.jpg",
        "name":"Son Goku",
        "legend":"Goku est le héros de Dragon Ball, un Saiyan passionné de combat,toujours en quête de devenir plus fort pour protéger la Terre."
    },
    {
        "id":1,
        "date": "15 Août 2023",
        "src": "/public/img/vegeta.jpg",
        "name": "Vegeta",
        "legend": "Vegeta est un prince Saiyan rival de Goku, souvent arrogant mais incroyablement puissant. Son obsession est de surpasser Goku et de prouver sa propre valeur."
    },
    {
        "id":2,
        "date": "3 Mai 2025",
        "src": "/public/img/gohan.jpg",
        "name": "Gohan",
        "legend": "Gohan est le fils de Goku et l'un des personnages principaux de Dragon Ball. Bien qu'il préfère la paix à la violence, il possède un immense potentiel de combat et a sauvé la Terre à plusieurs reprises."
    }
       
]

function CardInfo(){

    const [active , setActive] = useState(null)
    const [point , setPoint] = useState(0)
    const [card , setCard] = useState(cards[0])
   
    

    const handleClick = (id)=>{
        setPoint(id)
        setCard(cards[id])
        setActive("show")
    }




    return (
    <div className="cardInfo" >

            <img src="/public/img/code.jpg" alt="" />

            <div className="container">

                <div className="banner">
                    <img src={card.src} alt={card.name} className="img-fluid"/>
    
                    <div className="SlidePoint">
                        <div className={point === 0?"activePoint":null}  onClick={()=>handleClick(0)}></div>
                        <div className={point === 1?"activePoint":null}  onClick={()=>handleClick(1)} ></div>
                        <div className= {point === 2?"activePoint":null}  onClick={()=>handleClick(2)}></div>
                    </div>
    
                </div>
    
                <div className={"content "+active} >
                    <div className="date-content">
                        <small> {card.date} </small>
                    </div>
                    <h3 className="my-1"> 
                        {card.name}
                        <img src="/public/img/certify.png" alt="certufy" className="img-fluid"/>
                    </h3>
                    <hr className="my-1 mx-0"/>
                    <p> {card.legend} </p>
                    
                    <a href="" className="b1 shadow-none">
                        <span>Read more</span>
                        <div className="shadow shadow1 shadow-none" ></div>
                        <div className="shadow shadow2 shadow-none"></div>
                        <div className="shadow shadow3 shadow-none"></div>
                    </a>
                </div>
            </div>
    </div>
    )
}

export default CardInfo;