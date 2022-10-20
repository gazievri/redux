import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Достает из стора наш объект из todoSlice
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className='todolist'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
