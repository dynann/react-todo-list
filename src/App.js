import InputField from './components/inputField'
import ListItem from "./components/listItem"
import SearchBar from './components/searchBar'
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  let [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    const savedTodos = localStorage.getItem("listItem")
    if(savedTodos){
      setTodoList(savedTodos.split(","))
    }
  }, [])

  useEffect(() => {
    console.log('Update local storage')
    if(todoList.length !== 0){
      localStorage.setItem('listItem', todoList)
    }
  }, [todoList])

  useEffect(() => {
    return() => {
      console.log('Component unmount')
    }
  })


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
