import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import OpenHoursSidebar from './components/OpenHoursSidebar'
import { useState } from 'react'

function App() {

  const [isSidebarShown, setIsSidebarShown] = useState(false)

  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col">

      <OpenHoursSidebar isShown={isSidebarShown} setIsShown={setIsSidebarShown} />

      <Header />

      {/* Content div */}
      <div className="flex-1 ![background-size:_75px_100%] lg:![background-size:_100px_100%] contentBackground">

        {/* Is opened and scoops */}
        <div className="w-full 2xl:h-[90vh] flex flex-col 2xl:flex-row">

          {/* Is opened div */}
          <div className="flex-[40%] h-full flex justify-center items-center flex-col scale-60 sm:scale-75 lg:scale-110 py-20 2xl:py-0">
            <div className="bg-white p-30 rounded-[100%_70%_110%_60%] flex flex-col flex-nowrap justify-center items-center">
              <p className="font-[Imperial_Script] text-6xl text-nowrap">Teraz mamy</p>
              <p className="font-[Imperial_Script] text-8xl text-green-600 font-bold border-b-2 border-black">Otwarte</p>
              <p className="text-xl italic !mt-4 text-nowrap">12:00 - 19:00</p>
              <p onClick={() => { setIsSidebarShown(true) }} className="text-md italic text-nowrap text-blue-500 hover:underline cursor-pointer">Zobacz wszystkie godziny otwarcia</p>
            </div>
          </div>

          {/* Scoops */}
          <div className="flex-[60%] scoopsBackground 2xl:[border-bottom-left-radius:_30%_80%] 2xl:[border-top-left-radius:_15%_40%] shadow-xl flex justify-center items-center flex-col gap-3">

            <div className="scale-60 sm:scale-75 lg:scale-100 w-full h-full flex items-center flex-col justify-center flex-nowrap">

              <div className="flex flex-col items-center justify-center flex-nowrap h-[200px]">
                <h1 className="font-[Imperial_Script] text-8xl text-nowrap [-webkit-text-stroke:1px]">Dzisiejsze gałki</h1>
              </div>

              <div className="relative w-[700px] h-[350px] 3xl:w-[900px] 3xl:h-[450px] rounded-4xl">
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-300 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-[100%] h-[100%]">
                  <div className="bg-blue-500/50 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] relative">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-87/100 left-94/100 w-[10%] h-[5%] bg-blue-300/50 -rotate-45 rounded-full"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-82/100 left-92/100 w-[15%] h-[5%] bg-blue-300/50 -rotate-45 rounded-full"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-11/200 left-5/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-11/200 left-195/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-189/200 left-5/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-189/200 left-195/200"></div>
                  </div>
                </div>
              </div>

              <div className="h-[200px]">
                <p className="text-4xl !mt-10 text-nowrap italic font-light">Codziennie serwujemy inne smaki!</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default App
