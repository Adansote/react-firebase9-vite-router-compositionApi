import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const FormInput = forwardRef(
    ({type, placeholder, onChange, onBlur, name, children, label, error }, ref) => {
        const errorClassLabel = error ? 
        "block  text-sm m-2 font-medium text-red-700 dark:text-red-500"
        : "block  text-sm m-2 font-medium text-gray-900 darck:text-gray-300"
        
        const errorClassInput = error ?
        "bg-red-50 border  border-red-500 m-2 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
        : "bg-gray-50 border  border-gray-300 m-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    return (
        <div className="mb-4">
      <label
            htmlFor="email"
            className={errorClassLabel}
            >
             {label}
      </label>

         <input 
            className={errorClassInput}   
            type={type} 
            placeholder={placeholder} 
            ref={ref} 
            onChange={onChange} 
            onBlur={onBlur} 
            name={name}
    />
       {children} 
        </div>
    ) 
})
export default FormInput;