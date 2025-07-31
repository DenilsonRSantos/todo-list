import { useTodos } from '../hooks/useTodos'
import TodoItem from './TodoItem'
import { useMemo } from 'react'

export default function TodoList() {
  const { todos, filter } = useTodos()

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'concluidas':
        return todos.filter(t => t.completed)
      case 'pendentes':
        return todos.filter(t => !t.completed)
      default:
        return todos
    }
  }, [todos, filter])

  return (
    <div>
      {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}