import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
const [inputValue, setInputValue] = useState("");
const [todos, setTodos] =useState <Todo[]>([]);

  //型を宣言//
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  //new todo
  const newTodo: Todo = {
    inputValue: inputValue,
    id: todos.length,
    checked: false,
  };
  setTodos([newTodo, ...todos]);
  setInputValue("");
};

const handleEdit = (id:number,inputValue: string) => {
  const newTodos = todos.map((todo) => {
    if(todo.id === id){
      todo.inputValue = inputValue;   
    
    }
    return todo;
  });
  setTodos(newTodos);
};

const handleChacked = (id: number, checked:boolean) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id){
      todo.checked = !checked;
    }
    return todo;
  });
  setTodos(newTodos);
}
const handleDelete = (id: number) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
}
  //型を宣言//
  return (
  <div className="App">
      <div className="main_wrapper">
        <h1>TODO LIST</h1>
        <form onSubmit={(e) => handleSubmit (e)}  className="form_wrap">
          <input type="text"onChange={(e) => handleChange (e)} className="inputText"></input>
          <input type="submit" value="List up" className="submit_btn"></input>
        </form>
        <ul className="todolist">
          {
            todos.map((todo) => (
              <li key={todo.id}>
              
                <input type="text"onChange={(e) => handleEdit (todo.id,e.target.value)} 
                className="inputText" value={todo.inputValue}
                disabled={todo.checked}
                >
                </input>
                <input 
                  type="checkbox"
                  onChange={(e) => handleChacked (todo.id, todo.checked)} 
              >
                </input>
                <button onClick={() => handleDelete (todo.id)} className="submit_btn_delete">完了</button>
              </li>
            ))}
        </ul>
      </div>
  </div>
  );
}

export default App;
