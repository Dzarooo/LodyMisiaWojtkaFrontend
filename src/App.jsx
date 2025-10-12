import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import OpenHoursSidebar from './components/OpenHoursSidebar'
import { useState } from 'react'

function App() {

  const [isSidebarShown, setIsSidebarShown] = useState(false)

  const scoops = [
    { name: "Cytrynowe", color: 'rgb(255, 186, 0)', text: 'rgb(0,0,0)' },
    { name: "Truskawkowe", color: 'rgb(255, 162, 162)', text: 'rgb(0,0,0)' },
    { name: "Sorbet Kiwi Jabłko Awokado", color: 'rgb(5, 223, 114)', text: 'rgb(0,0,0)' },
    { name: "Guma Balonowa", color: 'rgb(81, 162, 255)', text: 'rgb(0,0,0)' },
    { name: "sorbet bergamotka, grejpfrut z różowym pieprzem", color: 'rgb(255, 255, 255)', text: 'rgb(0,0,0)' },
    { name: "Ciasteczkowe", color: 'rgb(123, 51, 6)', text: 'rgb(255,255,255)' },
    { name: "tiramisu z winem marshalla i kawa arabica", color: 'rgb(0, 184, 219)', text: 'rgb(0,0,0)' },
    { name: "Słony orzeszek ziemny", color: 'rgb(0, 188, 125)', text: 'rgb(0,0,0)' },
  ]

  return (
    <div className="w-[100vw] max-w-full min-h-[100vh] flex flex-col">

      <OpenHoursSidebar isShown={isSidebarShown} setIsShown={setIsSidebarShown} />

      <Header />

      {/* Content div */}
      <div className="flex-1 ![background-size:_75px_100%] lg:![background-size:_100px_100%] contentBackground">

        {/* Is opened and scoops */}
        <div className="w-full min-h-[95vh] xl:min-h-auto xl:h-[90vh] flex flex-col xl:flex-row">

          {/* Is opened div */}
          <div className="flex-[50%] xl:flex-[40%] flex justify-center items-center flex-col scale-60 sm:scale-75 xl:scale-110">
            <div className="bg-white p-30 rounded-[100%_70%_110%_60%] flex flex-col flex-nowrap justify-center items-center">
              <p className="font-[Imperial_Script] text-6xl text-nowrap">Teraz mamy</p>
              <p className="font-[Imperial_Script] text-8xl text-green-600 font-bold border-b-2 border-black">Otwarte</p>
              <p className="text-xl italic !mt-4 text-nowrap">12:00 - 19:00</p>
              <p onClick={() => { setIsSidebarShown(true) }} className="text-md italic text-nowrap text-blue-500 hover:underline cursor-pointer">Zobacz wszystkie godziny otwarcia</p>
            </div>
          </div>

          {/* Scoops */}
          <div className="relative flex-[50%] xl:flex-[60%] scoopsBackground xl:[border-bottom-left-radius:_30%_80%] xl:[border-top-left-radius:_15%_40%] shadow-xl flex justify-center items-center flex-col gap-3">

            {/* Visual scoops */}
            <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 -top-10 left-5/10 w-[400px] aspect-square rounded-full bg-pink-500">
              <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 top-105 left-70 w-[30px] h-[100px] rounded-b-full bg-pink-500"></div>
              <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 top-100 left-40 w-[30px] h-[50px] rounded-b-full bg-pink-500"></div>
            </div>
            <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 -top-10 left-3/10 w-[400px] aspect-square rounded-full bg-pink-400">
              <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 top-105 left-40 w-[30px] h-[60px] rounded-b-full bg-pink-400"></div>
            </div>

            <div className="absolute -top-8 left-8/10">
              <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 w-[600px] aspect-video rounded-[100%] -rotate-12 bg-orange-400"></div>

              <div className="animate-[scoopsDrip_5s_ease-in-out_infinite] hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 top-60 -left-8 w-[30px] h-[150px] rounded-b-full bg-orange-400"></div>
              <div className="animate-[scoopsDripFalling_5s_ease-in_infinite] [animation-delay:3200ms] [scale:0] hidden xl:block absolute -translate-x-1/2 top-75 -left-8 w-[30px] aspect-square rounded-full bg-orange-400"></div>

              <div className="hidden xl:block absolute -translate-x-1/2 -translate-y-1/2 top-50 left-2 w-[30px] h-[100px] rounded-b-full bg-orange-400"></div>

            </div>



            {/* Scoops content */}
            <div className="w-full h-full flex items-center flex-col justify-center flex-nowrap">

              <div className="flex flex-col items-center justify-center flex-nowrap xl:h-[200px]">
                <h1 className="text-6xl sm:text-7xl xl:text-8xl translate-y-12 xl:translate-y-0 font-[Imperial_Script] text-nowrap [-webkit-text-stroke:1px]">Dzisiejsze gałki</h1>
              </div>

              {/* scoops container */}
              <div className="scale-50 sm:scale-75 xl:scale-100 relative w-[700px] xl:w-[750px] h-[433px] rounded-4xl">
                {/* countertop */}
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-300 rounded-3xl"></div>
                {/* glass */}
                <div className="absolute top-0 left-0 w-[100%] h-[100%]">
                  <div className="bg-blue-500/50 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] relative">


                    {/* corners on glass */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-10/200 left-6/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-10/200 left-194/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-190/200 left-6/200"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4%] aspect-square bg-slate-300 rounded-full top-190/200 left-194/200"></div>

                    {/* scoops */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-3/10 left-1/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[0].color }}>
                      <p className="text-normal xl:text-lg text-center wrap-anywhere font-medium" style={{ color: scoops[0].text }}>{scoops[0].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-3/10 left-2/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[1].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[1].text }}>{scoops[1].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-3/10 left-3/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[2].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[2].text }}>{scoops[2].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-3/10 left-4/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[3].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[3].text }}>{scoops[3].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-7/10 left-1/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[4].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[4].text }}>{scoops[4].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-7/10 left-2/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[5].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[5].text }}>{scoops[5].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-7/10 left-3/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[6].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[6].text }}>{scoops[6].name}</p>
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-7/10 left-4/5 w-[18%] h-[35%] rounded-xl outline-6 outline-slate-300 singleScoopBackground flex justify-center items-center" style={{ backgroundColor: scoops[7].color }}>
                      <p className="text-normal xl:text-lg text-wrap text-center wrap-anywhere font-medium" style={{ color: scoops[7].text }}>{scoops[7].name}</p>
                    </div>

                    {/* light on glass */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-90/100 left-94/100 w-[10%] h-[2%] bg-blue-300/50 -rotate-45 rounded-full"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-87/100 left-92/100 w-[15%] h-[2%] bg-blue-300/50 -rotate-45 rounded-full"></div>

                  </div>
                </div>
              </div>

              <div className="xl:h-[200px]">
                <p className="text-xl sm:text-3xl xl:text-4xl xl:!mt-10 -translate-y-12 xl:-translate-y-0 text-nowrap italic font-light">Codziennie serwujemy inne smaki!</p>
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
