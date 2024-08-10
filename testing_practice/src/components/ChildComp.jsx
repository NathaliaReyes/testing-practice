import { useState } from "react";

export default function ChildComp({ onTextChange }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    onTextChange(input);
  };

  return(
    <div>
      <h2>Child Component:</h2>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}