import Check from "../Check";
import './style.css';

const Topping = ({ topping, onSelect }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onSelect} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
