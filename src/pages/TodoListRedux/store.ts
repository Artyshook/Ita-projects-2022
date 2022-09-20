import { FilterValuesType } from './TodoList'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { legacy_createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { v1 } from 'uuid'
import ReduxThunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

export type Task = { id: string; task: string; isDone: boolean }

const initialState: Task[] = []

export const tasksReducer = (state = initialState, action: ActionTypes): Task[] => {
  switch (action.type) {
    case 'ADD-TASK':
      return [...state, { id: v1(), task: action.title, isDone: false }]
    case 'REMOVE-TASK':
      return [...state.filter(t => t.id !== action.id)]
    case 'CHANGE-STATUS':
      return [
        ...state.map(task => (task.id === action.id ? { ...task, isDone: !action.status } : task)),
      ]
    case 'CHANGE-ORDER':
      const dragItem = state[action.start]
      const stateCopy = [...state]
      stateCopy.splice(action.start, 1)
      stateCopy.splice(action.end, 0, dragItem)
      return [...stateCopy]
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
export const addTaskAC = (title: string) => ({ type: 'ADD-TASK', title } as const)
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => ({ type: 'REMOVE-TASK', id } as const)
type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, status: boolean) =>
  ({ type: 'CHANGE-STATUS', id, status } as const)
type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (filter: FilterValuesType) =>
  ({ type: 'CHANGE-FILTER', filter } as const)
type changeOrderACType = ReturnType<typeof changeOrderAC>
export const changeOrderAC = (start: number, end: number) =>
  ({ type: 'CHANGE-ORDER', start, end } as const)

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, applyMiddleware(ReduxThunk))
export const persistor = persistStore(store)
export type AppRootStateType = ReturnType<typeof rootReducer>
