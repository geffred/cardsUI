/* eslint-disable react/prop-types */
import { useState } from "react";
import "/public/style/cardInfo.css"


function CardInfo({data}){

    const [active , setActive] = useState(null)
    const [point , setPoint] = useState(0)
    const [card , setCard] = useState(data[0])
   
    

    const handleClick = (id)=>{
        setPoint(id)
        setCard(data[id])
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