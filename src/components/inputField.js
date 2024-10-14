import React, { useState } from "react";

function InputField({addItem}) {
    let [todoInput, setTodoInput] = useState("");
    let handleButtonClicked = () => {
      addItem(todoInput);
      setTodoInput("");
    };
    return (
      <div>
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          type="text"
          placeholder="add a new todo"
        />
        <button onClick={handleButtonClicked}>add</button>
      </div>
    );
  }

export default InputField