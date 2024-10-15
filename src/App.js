import InputField from "./components/inputField";
import ListItem from "./components/listItem";
import SearchBar from "./components/searchBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //useState is a react hook : use to create todoList as an array, setTodoList is
  //function use to update todoList
  let [todoList, setTodoList] = useState([]);

  //this useEffect happen when mount components it loads the data from local storage
  //and it finds the saved data it will split into array string
  useEffect(() => {
    const savedTodo = localStorage.getItem("listItem");
    if (savedTodo) {
      setTodoList(savedTodo.split(","));
    }
  }, []);

  //this function doesn't return anything its hook or side effect when
  //the program app run and it will trigger save list to local storage whenever
  //savedTodo is happen
  useEffect(() => {
    console.log("Update local storage");
    if (todoList.length !== 0) {
      localStorage.setItem("listItem", todoList);
    } else {
      localStorage.removeItem("listItem", todoList); //clear local storage after delete all lists from TodoList
    }
  }, [todoList]);

  //this useEffect happens when user leave the page or close it prevents from memory leaking
  useEffect(() => {
    return () => {
      console.log("Component unmount");
    };
  });

  //a variable that stores an arrow function which adds newTodo to todoList with ... to avoid mutation
  //call setTodoList Function to update newTodo
  let addItem = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  //delete method
  let deleteItem = (index) => {
    const updateList = todoList.filter((_, i) => i !== index);
    setTodoList(updateList);
  };

  return (
    <div className="App">
      <div className="container">
        <header class="text-center text-light my-4">
          <h1 class="mb-4">Todo List</h1>
          <SearchBar />
          {todoList.map((todo, index) => {
            return (
              <div key={index}>
                <ListItem title={todo} onDelete={() => deleteItem(index)} />
              </div>
            );
          })}
          <InputField addItem={addItem} />
        </header>
      </div>
    </div>
  );
}
export default App;
