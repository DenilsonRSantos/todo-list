import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

export default function TodoForm() {
  const [text, setText] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Nova tarefa" />
      <button type="submit">Adicionar</button>
    </form>
  )
}