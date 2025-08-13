import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

export default function App() {
  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}
