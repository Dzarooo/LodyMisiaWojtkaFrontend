import { useState } from "react";

const OpenHoursSidebar = ({ isShown, setIsShown }) => {

    return (
        <div className={`h-[100vh] w-fit bg-white p-10 fixed z-10 [box-shadow:0px_0px_6px_-1px_rgba(0,0,0,0.5)] flex flex-col flex-nowrap gap-4 transition-transform duration-300 ${isShown ? "" : "-translate-x-full"}`}>
            <p className="text-xl border-b-solid border-b-black !pb-3 border-b-1 flex flex-nowrap justify-between items-center">
                <span>Godziny Otwarcia</span>
                <span onClick={() => {setIsShown(false)}} className="material-symbols-outlined cursor-pointer select-none hover:bg-slate-200 p-1 rounded-full transition-colors">close</span>
            </p>
            <div className="w-[300px] flex flex-col flex-nowrap gap-2">
                <p className="flex justify-between gap-4">
                    <span>Poniedziałek</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Wtorek</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Środa</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Czwartek</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Piątek</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Sobota</span>
                    <span>12:00 - 19:00</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span>Niedziela</span>
                    <span>12:00 - 19:00</span>
                </p>
            </div>
        </div>
    )
}

export default OpenHoursSidebar;