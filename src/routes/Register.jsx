import { useContext} from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
   

    const{register, handleSubmit, getValues, setError, formState: {errors}}= useForm({
  defaultValues:{
    email: "adansotmx@gmail.com",
    password: "123123"
  }

    })
    const {registerUser} = useContext(UserContext)
    const navegate = useNavigate()

  const onSubmit = async({email, password}) => {
 console.log(email, password)
    try {
        await registerUser(email, password)
        console.log("usuario creado")
        navegate("/")
    } catch (error) {
        console.log(error.code)
       
          
            switch(error.code){
                case "auth/email-already-in-use" :
                    
                    setError("email",{ 
                        message: "Usuario ya registrado"
                    })
                    break;
                case "auth/invalid-email":
                    setError("email",{ 
                        message: "Formato email no valido"
                    })
                    break;

                    default:
                        console.log("ocurrio un error en el servidor")
            }
    }
  } 
  

    return(
<>
<h1>Register</h1>
<form onSubmit={handleSubmit(onSubmit)}>

    <input 
    type="email" 
    placeholder="Ingrese Email"
     {...register("email" ,{required:{ value: true, message: "campo obligatorio"},
     pattern:{
       value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/ ,
       message:"Forrmato de email incorrecto"
    },
    
     })}

    />
    {
        errors.email && <p>{errors.email.message}</p>
    }

<input 
    type="password" 
    placeholder="Ingrese Password"
     {...register("password",{ minLength:{ value : 6, message: "Minimo 6 caracteres"},
    validate: {
        trim: (v) => {
            if (!v.trim()) {return "No seas payaso escribe algo"
        }
          return  true
        }
       }
       })}
    />
      {
     errors.password && <p>{errors.password.message}</p>
    }
     <input 
    type="password" 
    placeholder="Ingrese Password"
     {...register("repassword", {
        setValueAs: (v) =>v.trim(),
        validate: {
            equals: (v)  =>
             v === getValues("password") || "No coincide la contraseña", 
           
        }
     })}
    />
   {
    errors.repassword && <p>{errors.repassword.message}</p>
   }
    <button type="submit">Register</button>
</form>
</>  
    )
}
export default Register;
