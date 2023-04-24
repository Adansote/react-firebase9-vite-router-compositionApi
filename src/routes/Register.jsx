import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("adansotmx@gmail.com")
    const [password, setPassword]= useState("123123")
    const {registerUser} = useContext(UserContext)
    const navegate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log("procesando form:", email, password)
        try {
            await registerUser(email, password)
            console.log("usuario creado")
            navegate("/")
        } catch (error) {
            console.log(error.code)
        }
    }
    return(
<>
<h1>Register</h1>
<form onSubmit={handleSubmit}>

    <input 
    type="email" 
    placeholder="Ingrese Email"
    value={email} 
    onChange={e => setEmail(e.target.value)}
    />

<input 
    type="password" 
    placeholder="Ingrese Password"
    value={password} 
    onChange={e => setPassword(e.target.value)}
    />
    <button type="submit">Register</button>
</form>
</>  
    )
}
export default Register;