import { CgTrash } from 'react-icons/cg'
import { genericHookContextBuilder } from '../../helpers/genericHookContextBuilder'
import { theme } from '../../helpers/theme'
import { useLocalStorage } from '../../helpers/functions'
import { v1 } from 'uuid'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type FilterValuesType = 'all' | 'active' | 'completed'
type Task = { id: string; task: string; isDone: boolean }

export const NewTodoList = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  )
}

const useLogicState = () => {
  const [todoList, setTodoList] = useLocalStorage<Task[]>('task', [])
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterValuesType>('all')

  const getFilteredTasks = (filter: FilterValuesType) => {
    return filter === 'active'
      ? todoList.filter(t => !t.isDone)
      : filter === 'completed'
      ? todoList.filter(t => t.isDone)
      : todoList
  }
  const tasksForTodolist = getFilteredTasks(filter)

  const addTask = () => {
    if (newTask.trim() !== '') {
      setError(null)
      setTodoList([...todoList, { id: v1(), task: newTask, isDone: false }])
      setNewTask('')
    } else {
      setError('Title is required')
      return
    }
  }

  const removeTask = (id: string) => {
    setTodoList(todoList.filter(el => el.id !== id))
  }
  const statusTodoList = (id: string, status: boolean) => {
    setTodoList(todoList.map(el => (el.id === id ? { ...el, isDone: !status } : el)))
  }

  return {
    todoList,
    setTodoList,
    filter,
    setFilter,
    newTask,
    setNewTask,
    error,
    setError,
    addTask,
    removeTask,
    statusTodoList,
    tasksForTodolist,
  }
}

export const { ContextProvider: TodoContextProvider, Context: TodoContext } =
  genericHookContextBuilder(useLogicState)

export const TodoList = () => {
  const logic = useContext(TodoContext)
  return (
    <Div_Wrapper>
      <Div_Title>Todos</Div_Title>
      <Div_Input>
        <Input_Input
          type='text'
          onChange={event => logic.setNewTask(event.target.value)}
          value={logic.newTask}
          onKeyDown={event => (event.key === 'Enter' ? logic.addTask() : null)}
        />
        <Button_MyButton onClick={logic.addTask}>+</Button_MyButton>
      </Div_Input>
      <Div_ErrorMessage>{logic.error && <div> {logic.error} </div>} </Div_ErrorMessage>
      <Div_Tasks>
        {logic.tasksForTodolist.map(task => (
          <Li_Tasks key={task.id}>
            <input
              type='checkbox'
              checked={task.isDone}
              onClick={() => logic.statusTodoList(task.id, task.isDone)}
            />
            {task.task}
            <CgTrash onClick={() => logic.removeTask(task.id)} />
          </Li_Tasks>
        ))}
      </Div_Tasks>
      <Div_Filter>
        <Button_FilterButton onClick={() => logic.setFilter('all')}>All</Button_FilterButton>
        <Button_FilterButton onClick={() => logic.setFilter('active')}>Active</Button_FilterButton>
        <Button_FilterButton onClick={() => logic.setFilter('completed')}>
          Completed
        </Button_FilterButton>
      </Div_Filter>
    </Div_Wrapper>
  )
}

export const Div_Wrapper = styled.div`
  margin: 0;
  width: 100%;
  gap: 2rem;
  padding-top: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: ${theme.colors.blue};
  background: ${theme.background.backgroundColor};
`
export const Div_Tasks = styled.div`
  font-size: ${theme.fonts.small};
  gap: 1rem;
  margin-right: 7rem;
`
export const Div_Input = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.5rem;
`
export const Div_Filter = styled.div`
  font-size: ${theme.fonts.small};
  display: flex;
  gap: 1rem;
  margin-right: 5rem;
  justify-content: center;
`
export const Button_FilterButton = styled.button`
  border: 0.2rem solid ${theme.colors.green};
  border-radius: 40px;
  padding: 1rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
  background: none;
  &:hover {
    background: ${theme.colors.blue2};
    color: ${theme.colors.green};
  }
`
const Input_Input = styled.input`
  padding: 1.5rem;
  border: 0.3rem solid ${theme.colors.green};
  outline: none;
  border-radius: 30px;
  width: 15rem;
  height: 1.5rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
`
export const Button_MyButton = styled.button`
  letter-spacing: 1px;
  font-size: 1.5rem;
  border-radius: 60px;
  color: #00ff7f;
  background-color: ${theme.colors.blue};
  padding: 0;
  margin: 0;
  border: none;
  height: 5rem;
  width: 7rem;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${theme.colors.blue2};
  }
`
export const Div_Title = styled.div`
  display: block;
  font-size: ${theme.fonts.medium};
  text-align: left;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  margin-right: 7rem;
`
export const Li_Tasks = styled.li`
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem;
  input {
    padding: 0;
    margin: 0;
    width: 3rem;
  }
`
export const Div_ErrorMessage = styled.div`
  margin-right: 7rem;
  font-size: ${theme.fonts.small};
`
