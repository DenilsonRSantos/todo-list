import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

export default function App() {
  return (
    <main className="app">
      <h1>Lista de tarefas com REACT avançado</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </main>
  )
}