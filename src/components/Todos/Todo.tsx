import {
  Checkbox,
  Icon,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"
import { useSetAtom } from "jotai"
import { type FC, useCallback } from "preact/compat"
import { type Todo as TodoEntity, todosAtom } from "@/atoms"
import { memo } from "preact/compat"

const Todo: FC<TodoEntity> = memo(({ id, title, description, isCompleted }) => {
  const setTodos = useSetAtom(todosAtom)
  const toggleComplete = useCallback(
    () => setTodos(todosDraft => {
      const todo = todosDraft.find(todo => todo.id === id)
      if (!todo) return

      todo.isCompleted = !todo.isCompleted
    }),
    [id]
  )
  const deleteTodo = useCallback(
    () => setTodos(
      todosDraft => todosDraft.filter(todo => todo.id !== id)
    ),
    [id]
  )

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton onClick={deleteTodo}>
          <Icon>close</Icon>
        </IconButton>
      }
    >
      <ListItemButton onClick={toggleComplete}>
        <ListItemIcon>
          <Checkbox checked={isCompleted} />
        </ListItemIcon>
        <ListItemText primary={title} secondary={description} />
      </ListItemButton>
    </ListItem>
  )
})

export default Todo
