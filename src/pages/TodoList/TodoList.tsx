import { AppRootStateType, addTaskAC, changeTaskStatusAC, removeTaskAC } from './store'
import { CgTrash } from 'react-icons/cg'
import { GoBackButton } from '../../components/GoBackButton'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { theme } from '../../helpers/theme'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalStorage } from '../../helpers/functions'
import React, { useState } from 'react'
import styled from 'styled-components'

export type FilterValuesType = 'all' | 'active' | 'completed'

type Task = { id: string; task: string; isDone: boolean }

export const TodoList = () => {
  const dispatch = useDispatch()
  let tasks = useSelector<AppRootStateType, Array<Task>>(state => state)
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState(null as string | null)
  const [filter, setFilter] = useState('all' as FilterValuesType)

  const addTask = () => {
    if (newTask.trim() !== '') {
      setError(null)
      dispatch(addTaskAC(newTask))
      setNewTask('')
    } else {
      setError('Title is required')
      return
    }
  }

  const removeTask = (id: string) => {
    dispatch(removeTaskAC(id))
  }
  const statusTodoList = (id: string, status: boolean) => {
    dispatch(changeTaskStatusAC(id, status))
  }
  const filteredTodolist = (filter: FilterValuesType) => {
    return filter === 'active'
      ? tasks.filter(t => !t.isDone)
      : filter === 'completed'
      ? tasks.filter(t => t.isDone)
      : tasks
  }

  return (
    <HelmetProvider>
      <GoBackButton />
      <Div_Wrapper>
        <Helmet>
          <title>Artem Saibel - TodoList app</title>
          <meta name='description' content='Todo List App with React (using Hooks and Contexts)' />
        </Helmet>
        <Div_Card>
          <Div_Title>TODOS</Div_Title>
          <Div_Input>
            <Input_Input
              type='text'
              placeholder='Enter your task'
              onChange={event => {
                setError(null)
                setNewTask(event.target.value)
              }}
              value={newTask}
              onKeyDown={event => (event.key === 'Enter' ? addTask() : null)}
            />
            <Button_MyButton onClick={addTask}>+</Button_MyButton>
          </Div_Input>
          <Div_ErrorMessage>{error && <div> {error} </div>} </Div_ErrorMessage>
          <Div_Tasks>
            {filteredTodolist(filter).map(task => (
              <Li_Tasks key={task.id}>
                <input
                  type='checkbox'
                  onClick={() => statusTodoList(task.id, task.isDone)}
                  defaultChecked={task.isDone}
                />
                {task.task}
                <CgTrash onClick={() => removeTask(task.id)} />
              </Li_Tasks>
            ))}
          </Div_Tasks>
          <Div_Filter>
            <Button_FilterButton onClick={() => setFilter('all')}>ALL</Button_FilterButton>
            <Button_FilterButton onClick={() => setFilter('active')}>ACTIVE</Button_FilterButton>
            <Button_FilterButton onClick={() => setFilter('completed')}>
              COMPLETED
            </Button_FilterButton>
          </Div_Filter>
        </Div_Card>
      </Div_Wrapper>
    </HelmetProvider>
  )
}

export const Div_Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  background: ${theme.background.backgroundColor};
  color: ${theme.colors.blue};
`
const Div_Card = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: ${theme.colors.boxShadow2};
  padding: 6rem;
  max-width: 650px;
  margin: 2rem auto;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Div_Tasks = styled.div`
  font-size: ${theme.fonts.small};
  margin-left: 2rem;
`

export const Li_Tasks = styled.li`
  display: flex;
  min-width: 20rem;
  justify-content: space-between;
  padding: 1rem;
  input {
    padding: 0;
    margin: 0;
    width: 3rem;
  }
  border: 0.2rem solid ${theme.colors.grey};
  border-radius: 20px;
  margin: 0.5rem;
  box-shadow: ${theme.colors.boxShadow};
  &:hover {
    border: 2px solid ${theme.colors.blue};
  }
`

export const Div_Input = styled.div`
  border: 1px solid ${theme.colors.blue};
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`
export const Div_Filter = styled.div`
  font-size: ${theme.fonts.small};
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`
export const Button_FilterButton = styled.button`
  border: 0.1rem solid ${theme.colors.green};
  border-radius: 40px;
  padding: 1.5rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
  background: none;
  box-shadow: ${theme.colors.boxShadow};
  &:hover {
    border-color: ${theme.colors.blue};
    color: ${theme.colors.blue};
  }
`
const Input_Input = styled.input`
  margin: 1rem;
  outline: none;
  border: none;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fonts.small};
  &:hover {
    border-color: ${theme.colors.blue};
  }
`
export const Button_MyButton = styled.button`
  letter-spacing: 1px;
  font-size: 1.5rem;
  border-radius: 60px;
  border: none;
  color: #00ff7f;
  background-color: ${theme.colors.blue};
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
  font-size: ${theme.fonts.large};
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  color: ${theme.colors.grey};
  &:hover {
    color: ${theme.colors.blue};
  }
`
export const Div_ErrorMessage = styled.div`
  justify-content: center;
  font-size: ${theme.fonts.small};
`
