import "./App.css";
import { useAtom, atom } from "jotai";
import DisplayInput from "./DisplayInput";
import inputAtom from "./state";

function App() {
  const [, setInput] = useAtom(inputAtom);

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <DisplayInput />
      <input
        type="text"
        placeholder="enter something"
        onChange={handleChange}
      />
    </>
  );
}

export default App;
