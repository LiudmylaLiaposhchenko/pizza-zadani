import './style.css';

const Check = ({checked, onChange, disabled}) => {

  return (
    <button disabled={disabled}
      className="check"
      onClick={() => onChange(!checked)}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
