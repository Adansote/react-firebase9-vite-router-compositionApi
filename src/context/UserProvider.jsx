import { createContext, useState } from "react";

//logica de acceso
export const UserContext =  createContext()

const UserProvider = ({children}) => {
 const [user, setUser] = useState(false)
    return(
       <UserContext.Provider value={{user, setUser}}>
     {children}

       </UserContext.Provider>

    )
  
}
export default UserProvider;
