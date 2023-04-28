import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { erroresFirebase } from "../utils/erroresFirebase"
import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import { formValidate } from "../utils/formValidate"
import Title from "../components/Title"
import Button from "../components/Button"

const Login =() => {
  
 const {loginUser} = useContext(UserContext)
 const navegate = useNavigate()
 const {required, patternEmail, minLength, validateTrim}= formValidate()

 const{register,
    handleSubmit,  
    setError,
    formState: 
    {errors}}= useForm();
 
    const onSubmit = async({email, password}) => {
      
        try {
            await loginUser(email, password)
           
            navegate("/")
        } catch (error) {
          const {code, message} = erroresFirebase(error.code)
          setError(code,{message})
        }
      } 

    return(
    <>
    <Title text= "Login"/>
    <form className="w-full max-w-sm mx-auto bg-blue-500 p-8 rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>
        
  <FormInput  
        label="Ingresa tu correo"
        type="email" 
        placeholder="Ingrese Email"
        {...register("email" ,{
        required,
        pattern: patternEmail,
        })}
        error={errors.email}
        >
        <FormError error={errors.email}/>
    </FormInput>

    <FormInput
        label="Ingresa tu contraseña"
        type="password" 
        placeholder="Ingrese Password"
        {...register("password",{ 
            minLength,
        validate: validateTrim,
        })}
        error={errors.password}
        >
     <FormError error={errors.password}/>
   </FormInput>
   
    <Button text="Login" type="submit"/>
  </form>
    </>
        ) 
}
       export default Login

