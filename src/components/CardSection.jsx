/* eslint-disable react/prop-types */
import '/public/style/cardSection.css'

function CardSection({title ,name , img , description}){

    return(

        <div className='cardSectionContainer'>
            <div className="cardSection">
                <div className="imageContainer">
                    <img src={img} alt={name} />
                </div>
                <div className="content">
                    <a href="#"> {title} </a>
                    <p>
                        {description}
                    </p>
                </div>
             </div>
        </div>
    )
}

export default CardSection;