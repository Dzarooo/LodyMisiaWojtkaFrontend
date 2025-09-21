import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <div className="max-h-[100px] h-[5vh] lg:h-[10vh] bg-yellow-400 flex justify-center items-center gap-3 z-1 [box-shadow:0px_0px_6px_-1px_rgb(0_0_0_/_0.3)]">
            <p className="text-md lg:text-2xl">Lody</p>
            <img src={logo} className="h-[75%] aspect-square rounded-full select-none"/>
            <p className="text-md lg:text-2xl">Misia Wojtka</p>
        </div>
    )
}

export default Header;