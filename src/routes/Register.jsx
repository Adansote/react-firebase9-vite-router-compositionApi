import { useContext} from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import { formValidate } from "../utils/formValidate";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";


const Register = () => {
   const {required, patternEmail, minLength, validateTrim, validateEquals}= formValidate()
    const {registerUser} = useContext(UserContext)
    const navegate = useNavigate()

    const{register,
         handleSubmit, 
         getValues, 
         setError,
         formState: 
         {errors}}= useForm();

  const onSubmit = async({email, password}) => {
      
    try {
        await registerUser(email, password)
       
        navegate("/")
    } catch (error) {
        console.log(error.code)
        const {code, message} = erroresFirebase(error.code)
        setError(code,{message})
    }
  } 
  

    return(
<>
<Title text="Register"/>
<form className="w-full max-w-sm mx-auto bg-blue-500 p-8 rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>

  <FormInput  
   type="email" 
   placeholder="Ingrese Email"
    {...register("email" ,{
       required,
       pattern: patternEmail,
       
    })}
    label="Ingresa tu correo"
    error={errors.email}
    >
     <FormError error={errors.email}/>
  </FormInput>
    

<FormInput
 type="password" 
 placeholder="Ingrese Password"
  {...register("password",{ 
     minLength,
 validate: validateTrim,
})}
label="Ingresa tu password"
error={errors.password}
>
     <FormError error={errors.password}/>
</FormInput>


<FormInput
  type="password" 
  placeholder="Ingrese Password"
   {...register("repassword", {
      
      validate: validateEquals(getValues("password")),
   })}
   label="Confirma el password"
   error={errors.repassword}
   >
      <FormError error={errors.repassword}/>
</FormInput>
 
    <Button text="Register" type="submit"/>
</form>
</>  
    )
}
export default Register;
