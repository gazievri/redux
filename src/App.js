import './App.css';
import { useState } from 'react'
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);

  const addTodo = () => {
    if (text.trim().length) {
          setTodos([
      ...todos, 
      {
        id: new Date().toISOString(),
        text,
        completed: false
      }
    ]);
    setText('');
    }

  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed
        };
      })
    )  
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} />
    </div>
  );
}

export default App;
