import { useState } from "react";
import './style.css';

const Check = ({checked, onChange}) => {
  return (
    <button
      className="check"
      onClick={() => onChange(!checked)}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
