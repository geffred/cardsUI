import "/public/style/cardInfo.css"
function CardInfo(){
    const data = [
        {
            "date":"26 Mars 2024",
            "name":"Son Goku"
        }
    ]
    return (
    <div className="cardInfo" >
        <div className="container">

            <div className="banner">
                <img src="/public/img/goku.jpg" alt="goku" />

            <div className="SlidePoint">
                <div className=""></div>
                <div className="activePoint"></div>
                <div className=""></div>
            </div>

            </div>

            <div className="content">
                <small> 26 Mars 2024 </small>
                <h3>Son Goku</h3>
                <hr className="m-2 mx-0"/>
                <p>Goku est le héros de "Dragon Ball", un Saiyan passionné de combat,
                   toujours en quête de devenir plus fort pour protéger la Terre.
                </p>
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