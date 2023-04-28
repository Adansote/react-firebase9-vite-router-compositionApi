const Button = ({ text, type }) => (
    <button
        type={type}
        className="w-full bg-pink-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300"
    >
        {text}
    </button>
);
export default Button;