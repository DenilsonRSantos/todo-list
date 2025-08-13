import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { filterState } from "../atoms/filterState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case "concluidas":
        return list.filter((item) => item.isComplete);
      case "pendentes":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
