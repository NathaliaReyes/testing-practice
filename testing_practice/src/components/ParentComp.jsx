import { useState } from "react";
import ChildComp from './ChildComp';

export default function ParentComp() {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  }

  return(
    <div>
      <h1>Parent Component:</h1>
      <p>Text: {text}</p>
      <ChildComp onTextChange={handleTextChange} />
    </div>
  )
}