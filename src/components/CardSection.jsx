import '/public/style/cardSection.css'

function CardSection(){

    return(

        <div className="cardSection">
            <div className="imageContainer">
                <img src="/public/img/mob.jpg" alt="vegeta" />
            </div>
            <div className="content">
                <a href="#"> {"Jouer "} </a>
                <p>
                  Le mob de Mob Psycho 100 : une entité en constante évolution,
                   débordant de puissance psychique latente.
                </p>
            </div>
        </div>
    )
}

export default CardSection;