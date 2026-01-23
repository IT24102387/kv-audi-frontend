import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
          <h1>404 Error : Page not Found</h1>
          <Link className="bg-[#ff6600] p-1" to="/">Go Back to Home</Link>
        </div>

    )
}