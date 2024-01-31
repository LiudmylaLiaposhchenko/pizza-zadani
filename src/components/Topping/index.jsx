import { useContext } from "react";
import Check from "../Check";
import './style.css';
import { PrefsContext } from "../../settings-context";

const Topping = ({ topping, onSelect }) => {
  const veganOnly = useContext(PrefsContext)
  return (
    <div className="topping">
      <Check disabled={veganOnly && !topping.vegan} checked={topping.selected} onChange={onSelect} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
