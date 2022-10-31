import types from "../utils/pokemon-types";

const TypeIcon = ({ type, size }) => {
  const Icon = ({ type }) => {
    const iconIndex = types.find((item) => item.name === type).icon;
    return (
      <div className="flex items-center gap-1">
        <img src={iconIndex} alt={type} className={`h-${size} w-${size}`} />
        <div>{type}</div>
      </div>
    );
  };

  return <Icon type={type} />;
};

export default TypeIcon;
