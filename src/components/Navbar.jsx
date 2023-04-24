import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {UserContext} from "../context/UserProvider"
const Navbar = () => {

   const {user, signOutUser}= useContext(UserContext)
    const handleClickLogout = async()=>{
        try {
            await signOutUser()
        } catch (error) {
           console.log(error.code) 
        }
    }
    return(
<div>

    {
        user ? (
            <>
              <Link  to="/">Inicio</Link>
              <button onClick={handleClickLogout}>Logout</button>
            
            </>
    ) : (
        <>
        <NavLink to="/register"> Register</NavLink>
         <Link  to="/login">Login</Link>
        </>
       
    )}
</div>

    )
  
}
export default Navbar;
