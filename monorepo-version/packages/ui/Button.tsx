import useCount from "store";

import "./Button.css";

export const Button = () => {
  const [state, setState] = useCount();
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};
