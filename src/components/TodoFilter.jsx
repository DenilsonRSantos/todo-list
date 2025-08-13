import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterState";

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div className="todo-filter">
      <button onClick={() => setFilter("todas")}>Todas</button>
      <button onClick={() => setFilter("concluidas")}>Concluídas</button>
      <button onClick={() => setFilter("pendentes")}>Pendentes</button>
    </div>
  );
}
