import { Button, Stack, TextField } from "@mui/material"
import { useSetAtom } from "jotai"
import { nanoid } from "nanoid"
import { useCallback, useState } from "preact/hooks"
import { Todo, todosAtom } from "@/atoms"
import { FormSubmitEvent, FieldChangeEvent } from "@/lib/types"
import { memo } from "preact/compat"

const TodoCreator = memo(() => {
  const setTodos = useSetAtom(todosAtom)
  const [value, setValue] = useState('')
  const valueChanged = useCallback((event: FieldChangeEvent) => {
    setValue(event.currentTarget.value)
  }, [])
  const createTodo = useCallback((event: FormSubmitEvent) => {
    event.preventDefault()
    const [title, ...descriptions] = value.split('\n')
    setValue('')
    setTodos((todos: Todo[]): Todo[] => [
      ...todos,
      {
        title,
        id: nanoid(),
        description: descriptions.join('\n'),
        isCompleted: false,
      }
    ])
  }, [value])

  return (
    <form onSubmit={createTodo}>
      <Stack spacing={1}>
        <TextField
          multiline
          fullWidth
          rows={2}
          placeholder="What do you have to do?"
          value={value}
          onChange={valueChanged}
        />
        <Button fullWidth type="submit" variant="contained" disabled={!value}>Create</Button>
      </Stack>
    </form>
  )
})

export default TodoCreator
