const Header = () => {
    return (
        <div className="min-h-[50px] max-h-[100px] h-[5vh] sm:h-[10vh] bg-yellow-400 flex justify-center items-center gap-3 z-1 [box-shadow:0px_0px_6px_-1px_rgb(0_0_0_/_0.3)]">
            <p className="text-md sm:text-2xl">Lody</p>
            <img src="/LodyMisiaWojtkaFrontend/logo.jpg" className="h-[75%] aspect-square rounded-full select-none"/>
            <p className="text-md sm:text-2xl">Misia Wojtka</p>
        </div>
    )
}

export default Header;