import { CgTrash } from 'react-icons/cg'
import { background, colors, fonts } from '../../helpers/theme'
import { v1 } from 'uuid'
import React, {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import useLocalStorage from '../../helpers/functions'

export type FilterValuesType = 'all' | 'active' | 'completed'
type Tasks = { id: string; task: string; isDone: boolean }

const lsId = {
  task: 'input:task',
}
const getTasksFromLs = (): Tasks[] => {
  const lsTasks = localStorage.getItem(lsId.task)
  if (lsTasks) {
    return JSON.parse(lsTasks)
  }
  return []
}

export const TodoList = () => {
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState<FilterValuesType>('all')
  const [error, setError] = useState<string | null>(null)
  let [task2, setTask2] = useLocalStorage<Tasks[]>('tasks', [] as Tasks[])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask.trim() !== '') {
      setError(null)
      let myTask = { id: v1(), task: newTask, isDone: false }
      setTask2([...task2, myTask]) // change
      // localStorage.setItem('localTasks', JSON.stringify([...task2, myTask])) //ch
      setNewTask('')
    } else {
      setError('Title is required')
    }
  }
  const removeTask = (id: string) => {
    let filteredTasks = task2.filter((e: { id: string }) => e.id !== id) //ch
    setTask2(filteredTasks) //ch
  }

  if (filter === 'active') {
    task2 = task2.filter((t: { isDone: any }) => !t.isDone) //ch
  }
  if (filter === 'completed') {
    task2 = task2.filter((t: { isDone: any }) => t.isDone) //ch
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  const statusTask = (id: string, status: boolean) => {
    setTask2(task2.map((e: { id: string }) => (e.id === id ? { ...e, isDone: !status } : e)))
  } //ch
  return (
    <Div_Wrapper>
      <Div_Title>Todos</Div_Title>
      <Div_Input>
        <Input type='text' onChange={handleChange} value={newTask} />
        <Div_Button onClick={addTask}>+</Div_Button>
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
        <Div_FilterButton onClick={() => changeFilter('all')}>All</Div_FilterButton>
        <Div_FilterButton onClick={() => changeFilter('active')}>Active</Div_FilterButton>
        <Div_FilterButton onClick={() => changeFilter('completed')}>Completed</Div_FilterButton>
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
  color: ${colors.blue};
  background: ${background.backgroundColor};
`
export const Div_Tasks = styled.div`
  font-size: ${fonts.small};
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
  font-size: ${fonts.small};
  display: flex;
  gap: 1rem;
  margin-right: 5rem;
  justify-content: center;
`
export const Div_FilterButton = styled.button`
  border: 0.2rem solid ${colors.green};
  border-radius: 40px;
  padding: 1rem;
  color: ${colors.blue};
  font-size: ${fonts.small};
  background: none;
  &:hover {
    background: ${colors.blue2};
    color: ${colors.green};
  }
`
const Input = styled.input`
  padding: 1.5rem;
  border: 0.3rem solid ${colors.green};
  outline: none;
  border-radius: 30px;
  width: 15rem;
  height: 1.5rem;
  color: ${colors.blue};
  font-size: ${fonts.small};
`
export const Div_Button = styled.button`
  letter-spacing: 1px;
  font-size: 1.5rem;
  border-radius: 60px;
  color: #00ff7f;
  background-color: ${colors.blue};
  padding: 0;
  margin: 0;
  border: none;
  height: 5rem;
  width: 7rem;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${colors.blue2};
  }
`
export const Div_Title = styled.div`
  display: block;
  font-size: ${fonts.medium};
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
  font-size: ${fonts.small};
`
