 export const formValidate = () => {
return {
    required:{
         value: true, 
         message: "campo obligatorio"
} ,
patternEmail:{
    value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/ ,
    message:"Fomato de email incorrecto"
 },
 minLength: {
    value: 6,
    message: "Minimo 6 caracteres",
 },
 validateTrim:{
 trim: (v) => {
    if (!v.trim()) {return "No seas payaso escribe algo"
}
  return  true;
   },
 },
   validateEquals(Value) {
   return{
     equals: (v)  =>
     v === Value || "No coincide la contraseña", 
   }   
}
  }
 }
