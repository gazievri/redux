import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todoSlice';

const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  const deleteTask = (id) => dispatch(deleteTodo(id));

  const setTodoComplete = (id) => dispatch(toggleStatus(id));

  return (
    <li className='todoitem'>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setTodoComplete(id)}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => deleteTask(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
