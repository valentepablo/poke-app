const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="push-button border-y-4 border-zinc-900 bg-blue-500 py-2 px-4 text-sm text-white active:translate-y-1 md:px-8"
    >
      {text}
    </button>
  );
};

export default Button;
