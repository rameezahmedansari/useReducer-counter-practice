import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, count: state.count + 1 };
      case "subtract":
        return { ...state, count: state.count - 1 };
      case "multiply":
        return { ...state, count: state.count * 2 };
      case "divide":
        return { ...state, count: state.count / 2 };
      default:
        return state;
    }
  };

  const initialState = {
    count: 0
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "subtract" })}>Sub</button>
      <button onClick={() => dispatch({ type: "multiply" })}>
        Multiply by 2
      </button>
      <button onClick={() => dispatch({ type: "divide" })}>Divide by 2</button>
    </div>
  );
}
