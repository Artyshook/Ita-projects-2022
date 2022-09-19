import { FilterValuesType } from './TodoList'
import { legacy_createStore } from 'redux'
import { v1 } from 'uuid'
export type Task = { id: string; task: string; isDone: boolean }

export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key)

    if (serializedState === null) {
      return []
    }
    return JSON.parse(serializedState) as []
  } catch (err) {
    return []
  }
}

export const saveState = (key: string, state: Task[]) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.error
  }
}

const setPersist = (value: Task[]) => {
  saveState('state', value)
}

const initialState: Task[] = loadState('state')
export const tasksReducer = (state = initialState, action: ActionTypes): Task[] => {
  switch (action.type) {
    case 'ADD-TASK':
      const addTaskState = [...state, { id: v1(), task: action.title, isDone: false }]
      setPersist(addTaskState)
      return addTaskState
    case 'REMOVE-TASK':
      const filterTaskState = state.filter(task => task.id !== action.id)
      setPersist(filterTaskState)
      return filterTaskState

    case 'CHANGE-STATUS':
      const changeStatusState = state.map(task =>
        task.id === action.id ? { ...task, isDone: !action.status } : task
      )
      setPersist(changeStatusState)
      return changeStatusState

    case 'CHANGE-ORDER':
      const dragItem = state[action.start]
      state.splice(action.start, 1)
      state.splice(action.end, 0, dragItem)
      setPersist(state)
      return [...state]

    default:
      return state
  }
}

type ActionTypes =
  | addTaskACType
  | removeTaskACType
  | changeTaskStatusACType
  | changeFilterACType
  | changeOrderACType

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) =>
  ({
    type: 'ADD-TASK',
    title,
  } as const)
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) =>
  ({
    type: 'REMOVE-TASK',
    id,
  } as const)

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, status: boolean) =>
  ({
    type: 'CHANGE-STATUS',
    id,
    status,
  } as const)

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (filter: FilterValuesType) =>
  ({
    type: 'CHANGE-FILTER',
    filter,
  } as const)

type changeOrderACType = ReturnType<typeof changeOrderAC>
export const changeOrderAC = (start: number, end: number) =>
  ({
    type: 'CHANGE-ORDER',
    start,
    end,
  } as const)

export const store = legacy_createStore(tasksReducer)
export type AppRootStateType = ReturnType<typeof tasksReducer>
