import { CgTrash } from 'react-icons/cg'
import { theme } from '../../helpers/theme'
import { useLocalStorage } from '../../helpers/functions'
import { v1 } from 'uuid'
import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

export type FilterValuesType = 'all' | 'active' | 'completed'
type Tasks = { id: string; task: string; isDone: boolean }

export const TodoList = () => {
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState<FilterValuesType>('all')
  const [error, setError] = useState<string | null>(null)
  let [task2, setTask2] = useLocalStorage<Tasks[]>('tasks', [] as Tasks[])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask1 = () => {
    if (newTask.trim() === '') {
      setError('Title is required')
      return
    }
    setError(null)
    setTask2([...task2, { id: v1(), task: newTask, isDone: false }])
    setNewTask('')
  }
  // const addTask = () => {
  //   if (newTask.trim() !== '') {
  //     setError(null)
  //     setTask2([...task2, { id: v1(), task: newTask, isDone: false }])
  //     setNewTask('')
  //   } else {
  //     setError('Title is required')
  //   }
  // }
  const removeTask = (id: string) => {
    setTask2(task2.filter((el: { id: string }) => el.id !== id))
    // let filteredTasks = task2.filter((el: { id: string }) => el.id !== id)
    // setTask2(filteredTasks)
  }

  if (filter === 'active') {
    task2 = task2.filter((t: { isDone: boolean }) => !t.isDone)
  } else if (filter === 'completed') {
    task2 = task2.filter((t: { isDone: boolean }) => t.isDone)
  } else filter === 'all'

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  const statusTask = (id: string, status: boolean) => {
    setTask2(task2.map(el => (el.id === id ? { ...el, isDone: !status } : el)))
  }
  return (
    <Div_Wrapper>
      <Div_Title>Todos</Div_Title>
      <Div_Input>
        <Input_Input type='text' onChange={handleChange} value={newTask} />
        <Button_MyButton onClick={addTask1}>+</Button_MyButton>
      </Div_Input>
      <Div_ErrorMessage>{error && <div> {error} </div>} </Div_ErrorMessage>
      <Div_Tasks>
        {task2.map((e: Tasks) => (
          <Li_Tasks key={e.id}>
            <input type='checkbox' checked={e.isDone} onClick={() => statusTask(e.id, e.isDone)} />
            {e.task}
            <CgTrash onClick={() => removeTask(e.id)} />
          </Li_Tasks>
        ))}
      </Div_Tasks>
      <Div_Filter>
        <Button_FilterButton onClick={() => changeFilter('all')}>All</Button_FilterButton>
        <Button_FilterButton onClick={() => changeFilter('active')}>Active</Button_FilterButton>
        <Button_FilterButton onClick={() => changeFilter('completed')}>
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
