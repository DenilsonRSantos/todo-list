import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors/filteredTodoListState";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="todo-list">
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
