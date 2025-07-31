import { useTodos } from '../hooks/useTodos'

export default function TodoFilters() {
  const { setFilter, filter } = useTodos()
  return (
    <div>
      <button onClick={() => setFilter('todas')} disabled={filter === 'todas'}>Todas</button>
      <button onClick={() => setFilter('concluidas')} disabled={filter === 'concluidas'}>Concluídas</button>
      <button onClick={() => setFilter('pendentes')} disabled={filter === 'pendentes'}>Pendentes</button>
    </div>
  )
}