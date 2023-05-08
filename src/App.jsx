import { Routes,Route } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./context/UserProvider"

import LayoutContainerForm from "./components/Layouts/LayoutContainerForm"
import Perfil from "./routes/Perfil"
import LayoutRequiereAuth from "./components/Layouts/LayoutRequiereAuth"
import NotFound from "./routes/NotFound"
import LayoutRedirect from "./components/Layouts/LayoutRedirect"
import Register from "./routes/Register"
import Login from "./routes/Login"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
//context appi prove una forma de pasar datos atraves del arbol de componentes sin tener que pasar props
//manualmente en cada nivel y esta configurado con router
const App = () => {
const {user} = useContext(UserContext)
 if(user === false){
  return <p>Loading....</p>
 }

  return (
    
<>

        <Navbar/>
    <Routes> 
       
       <Route path="/" element={<LayoutRequiereAuth/>}>
            <Route index element={<Home/>}/>
            <Route path="perfil" element={<Perfil/>}/>
       </Route>

       <Route   path="/" element={<LayoutContainerForm/>}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>  
       </Route>  
       
       <Route path="/:nanoid" element={<LayoutRedirect/>}>
       <Route index element={<NotFound/>}/>   
      </Route> 
      
    </Routes>
</>   
  )
}

export default App
