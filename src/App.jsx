import "/public/style/app.css"
import './components/CardInfo'
import CardInfo from './components/CardInfo'
import CardSection from "./components/CardSection"
function App() {

  return (
   <main>
      <div className="container">
         {/* <CardInfo />*/}
         <div className="row">
              <div className="col-4">  <CardSection/> </div>
              <div className="col-4">  <CardSection/> </div>
              <div className="col-4">  <CardSection/> </div>
           
         </div>
      </div>
   </main>
  )
}

export default App
