import { List } from "@mui/material"
import { useAtomValue } from "jotai"
import { todosAtom } from "../../atoms"
import Todo from "./Todo"

const TodoList = () => {
  const todos = useAtomValue(todosAtom)

  return (
    <List>
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </List>
  )
}

export default TodoList
