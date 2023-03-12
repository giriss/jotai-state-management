import { atomWithImmer } from "jotai-immer";
import { nanoid } from "nanoid";

export interface Todo {
  id: string
  title: string
  description?: string
  isCompleted?: boolean
}

export const todosAtom = atomWithImmer<Todo[]>([
  {
    id: nanoid(),
    title: 'Initial todo ✅',
    description: 'This is just a placeholder todo 😜',
    isCompleted: true,
  },
])

todosAtom.debugLabel = 'todos'
