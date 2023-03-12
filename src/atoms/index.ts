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

export interface Employee {
  id: string
  name: string
  dob: Date
  gender: 'male' | 'female'
  isFavorite?: boolean
}

export const employeesAtom = atomWithImmer<Employee[]>([
  {
    id: nanoid(),
    name: 'Neeti Mohan',
    dob: new Date(1979, 10, 18),
    gender: 'female',
    isFavorite: true,
  },
  {
    id: nanoid(),
    name: 'Girish Gopaul',
    dob: new Date(1995, 9, 5),
    gender: 'male',
    isFavorite: false,
  },
  {
    id: nanoid(),
    name: 'Shraddha Kapoor',
    dob: new Date(1989, 2, 3),
    gender: 'female',
    isFavorite: true,
  },
  {
    id: nanoid(),
    name: 'Kiara Advani',
    dob: new Date(1992, 6, 31),
    gender: 'female',
    isFavorite: true,
  },
])

employeesAtom.debugLabel = 'employees'
