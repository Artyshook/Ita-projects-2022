import { FilterValuesType } from './TodoList'
import { legacy_createStore } from 'redux'
import { v1 } from 'uuid'
export type Task = { id: string; task: string; isDone: boolean }

export const initialState: Task[] = [{ id: v1(), task: 'task1', isDone: false }]
export const tasksReducer = (state = initialState, action: ActionTypes): Task[] => {
  switch (action.type) {
    case 'ADD-TASK':
      return [...state, { id: v1(), task: action.title, isDone: false }]
    case 'REMOVE-TASK':
      return state.filter(task => task.id !== action.id)

    case 'CHANGE-STATUS':
      return state.map(task => (task.id === action.id ? { ...task, isDone: !action.status } : task))

    default:
      return state
  }
}

type ActionTypes = addTaskACType | removeTaskACType | changeTaskStatusACType | changeFilterACType

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
  return {
    type: 'ADD-TASK',
    title,
  } as const
}
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVE-TASK',
    id,
  } as const
}

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, status: boolean) => {
  return {
    type: 'CHANGE-STATUS',
    id,
    status,
  } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (filter: FilterValuesType) => {
  return {
    type: 'CHANGE-FILTER',
    filter,
  } as const
}

export const store = legacy_createStore(tasksReducer)
export type AppRootStateType = ReturnType<typeof tasksReducer>
