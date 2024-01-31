import { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings: initialToppings }) => {
  const [toppings, setToppings] = useState(initialToppings);

  let selectedCount = 0;
  let sum = 0;
  for (const topping of toppings) {
    if (topping.selected) {
      selectedCount++;
      sum = sum + topping.price;
    }
  }
  return (
    <><div className="vegan">
      <p>Do you want a vegan pizza?</p>
      <button className="vegan-btn" >YES</button>
    </div>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedCount}, total price: {sum.toFixed(2)} Euro</p>

      <div className="toppings">
        {toppings.map((topping, i) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelect={(selected) => {
              setToppings(toppings => {
                const clone = [...toppings];
                clone[i] = {
                  ...toppings[i],
                  selected,
                };
                return clone;
              })
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
