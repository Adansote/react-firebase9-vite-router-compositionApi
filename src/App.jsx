import { Routes,Route } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
import RequiereAuth from "./components/RequiereAuth"
//context appi prove una forma de pasar datos atraves del arbol de componentes sin tener que pasar props
//manualmente en cada nivel y esta configurado con router
const App = () => {


  return (
<>
        <Navbar/>
        <div>App</div>
       
       <Routes>
       <Route path="/" element={
        <RequiereAuth>
          <Home/>
        </RequiereAuth>
       }/> 
       <Route path="/login" element={<Login/>}/>
       
    </Routes>

</>   
  )
}

export default App
