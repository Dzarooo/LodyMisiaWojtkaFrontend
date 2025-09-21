import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex-1 ![background-size:_75px_100%] lg:![background-size:_100px_100%] contentBackground">
        <p>jakis wybitny content</p>
      </div>
      <Footer />
    </div>
  )
}

export default App
