import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
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
    const classButtonBlue ="m-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none  focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3  dark:bg-purple-600dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition duration-300"
  const classButtonGreen="m-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition duration-300"

    return(
<nav className="bg-white border-gray-200 dark:bg-gray-900">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">URLShort APP</span>
   </Link>
    <div className="flex md:order-2">
    {
        user ? (
            <>
         <NavLink  to="/" className={classButtonBlue}>Inicio</NavLink>

      <button onClick={handleClickLogout} className={classButtonGreen}>Logout</button>
            
            </>
    ) : (
        <>
        
        <NavLink  to="/login" className={classButtonBlue}>Login</NavLink>
        <NavLink to="/register" className={classButtonBlue}> Register</NavLink>

        </>
    )}
       
    </div>
   </div>
</nav>

    )
  
}
export default Navbar;
