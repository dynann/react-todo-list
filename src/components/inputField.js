import React, { useState } from "react";

function InputField({addItem}) {
    let [todoInput, setTodoInput] = useState("");
    let handleButtonClicked = () => {
      addItem(todoInput);
      setTodoInput("");
    };
    return (
      <form class="add text-center my-4">
        <label class="text-alight">Add Todo</label>
        <input class="form-control m-auto"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          type="text"
          placeholder="add a new todo"
        />
        <div class="text-center">
        <button onClick={handleButtonClicked} class="btn btn-light">add</button>
      </div>
      </form>
    );
  }

export default InputField