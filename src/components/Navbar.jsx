import { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../context/UserProvider"
const Navbar = () => {

   const {user, setUser}= useContext(UserContext)

    return(
<div>
    {
        user ? (
            <>
              <Link  to="/">Inicio</Link>

             <button onClick={()=> setUser(false)}>Logout</button>
            </>
    ) : (
        <Link  to="/login">Login</Link>
    )}
</div>

    )
  
}
export default Navbar;
