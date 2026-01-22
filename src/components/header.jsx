import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-full h-[100px] shadow-xl">
            <Link to="/" className="text-[25px] font-bold ">
            Home
            </Link>
             <Link to="/contat" className="text-[25px] font-bold ">
            contact
            </Link>
            {/*gallery*/}
             <Link to="/gallery" className="text-[25px] font-bold ">
            gallery
            </Link>
            {/*items*/}
             <Link to="/items" className="text-[25px] font-bold ">
            Item
            </Link>



        </header>
    )
}