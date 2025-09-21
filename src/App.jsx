import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col">

      <Header />

      {/* Content div */}
      <div className="flex-1 ![background-size:_75px_100%] lg:![background-size:_100px_100%] contentBackground">

        {/* Is opened and scoops */}
        <div className="w-full h-[95vh] lg:h-[90vh] flex">

          <div className="flex-[50%] h-full flex justify-center items-center flex-col">
            <div className="bg-white p-30 rounded-[100%_70%_110%_60%] flex flex-col flex-nowrap justify-center items-center">
              <p className="font-[Imperial_Script] text-6xl text-nowrap">Dzisiaj mamy</p>
              <p className="font-[Imperial_Script] text-8xl text-green-600 font-bold border-b-2 border-black">Otwarte</p>
              <p className="text-xl italic !mt-4 text-nowrap">12:00 - 19:00</p>
              <p className="text-md italic text-nowrap text-blue-500 hover:underline cursor-pointer">Zobacz wszystkie godziny otwarcia</p>
            </div>
          </div>

          <div className="flex-[50%] bg-green-500">

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default App
