import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  
  const [todos, setTodos] = React.useState([])
  return (
    <div className="App">
      <h1>My Todolist</h1>

      <TodoList todo= {todos} />
      <AddTodo passTodo ={setTodos} className="AddTodo" />
    </div>
  );
}

export default App;
