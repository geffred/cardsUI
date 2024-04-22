import { useEffect, useState } from "react";
import "/public/style/cardInfo.css"
function CardInfo(){

    const [point , setPoint] = useState(1)
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
    const [card , setCard] = useState(cards[2])

    const handleClick = (e)=>{
        const id = parseInt(e.target.id)
        setPoint(id)
        setCard(cards[id])
    }




       



    return (
    <div className="cardInfo" >

            <div className="container">

                <img src="/public/img/certify.png" alt="certufy" />

                <div className="banner">
                    <img src={card.src} alt={card.name} />
    
                    <div className="SlidePoint">
                        <div className={point === 0?"activePoint":null} id="0" onClick={handleClick}></div>
                        <div className={point === 1?"activePoint":null} id="1" onClick={handleClick} ></div>
                        <div className= {point === 2?"activePoint":null} id="2" onClick={handleClick}></div>
                    </div>
    
                </div>
    
                <div className="content" >
                    <small> {card.date} </small>
                    <h3> {card.name} </h3>
                    <hr className="m-2 mx-0"/>
                    <p> {card.legend} </p>
                    <a href="" className="shadow-none">
                         READ MORE
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