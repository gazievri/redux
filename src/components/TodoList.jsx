import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
  return (
    <ul>
        {
            todos.map(todo => <TodoItem key={todo.id} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} {...todo} />)
        }
    </ul>
  )
}

export default TodoList