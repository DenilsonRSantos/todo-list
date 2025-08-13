import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

export default function TodoItem({ item }) {
  const [list, setList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setList(
      list.map((t) =>
        t.id === item.id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  };

  const removeItem = () => {
    setList(list.filter((t) => t.id !== item.id));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: item.isComplete ? "line-through" : "" }}>
        {item.text}
      </span>
      <button onClick={removeItem}>X</button>
    </div>
  );
}
