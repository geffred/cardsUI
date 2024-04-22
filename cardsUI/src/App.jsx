import "/public/style/app.css"
import './components/CardInfo'
import CardInfo from './components/CardInfo'
function App() {

  return (
   <main>
      <div className="container">
          <CardInfo />
          <CardInfo />
          <CardInfo />
      </div>
   </main>
  )
}

export default App
