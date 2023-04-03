import { Button } from "ui";
import useCount from "store";

export default function Web() {
  const [state, setState] = useCount();
  return (
    <div>
      <h1>App2</h1>
      <Button />
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
          App2 Button: {state}
        </button>
      </div>
    </div>
  );
}
