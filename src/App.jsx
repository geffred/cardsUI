import "/public/style/app.css"
import './components/CardInfo'
import CardSection from "./components/CardSection"

const item = {
  title:"Jouer",
  name:"Mob",
  description:" Le mob de Mob Psycho 100 : une entité en constante évolution,débordant de puissance psychique latente.",
  img:"/public/img/mob.jpg"
}

// eslint-disable-next-line no-unused-vars
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

function App() {

  return (
   <main>
      <div className="container-fluid">
          <div className="row">
              <div className="d-flex justify-content-center col-lg-4 col-sm-6 col-12"> <CardSection {...item} /> </div>
              <div className="d-flex justify-content-center col-lg-4 col-sm-6 col-12"> <CardSection {...item} /> </div>
              <div className="d-flex justify-content-center col-lg-4 col-sm-6 col-12"> <CardSection {...item} /> </div>
          </div>
      </div>
   </main>
  )
}

export default App
