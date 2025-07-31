import React from 'react'
import { useTodos } from '../hooks/useTodos'

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos()

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remover</button>
    </div>
  )
}

export default React.memo(TodoItem)