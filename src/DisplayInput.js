import { useAtom, atom } from "jotai";
import inputAtom from "./state";

const DisplayInput = () => {
  const [input, setInput] = useAtom(inputAtom);
  return <p>User input: {input}</p>;
};

export default DisplayInput;
