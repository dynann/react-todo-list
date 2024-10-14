
import "./App.css";
import { useState } from "react";

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

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="search"></input>
      <button> search</button>
    </div>
  );
}

function ListItem({ title, onDelete }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

function App() {
  let [todoList, setTodoList] = useState([]);
  let addItem = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* {SearchBar()} */}
      <SearchBar />
     
      <InputField addItem={addItem}/>
      {todoList.map((todo, index) => {
        return (   <div key={index} >
          <ListItem title = {todo} />
          </div>
          )
      })}
    </div>
  );
}
export default App;
