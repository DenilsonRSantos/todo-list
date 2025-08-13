import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

export default function TodoForm() {
  const [text, setText] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (!text.trim()) return;
    setTodoList((oldList) => [
      ...oldList,
      { id: Date.now(), text, isComplete: false },
    ]);
    setText("");
  };

  return (
    <div className="todo-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addItem}>Adicionar</button>
    </div>
  );
}
