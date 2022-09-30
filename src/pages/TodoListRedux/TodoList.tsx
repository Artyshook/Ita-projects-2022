import {
  AppRootStateType,
  addTaskAC,
  changeOrderAC,
  changeTaskStatusAC,
  removeTaskAC,
} from './store'
import { CgTrash } from 'react-icons/cg'
import { DarkModeProps } from '../../WebsitePage/components/BaseLayout'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { getDate, sleep } from '../../helpers/functions'
import { motion } from 'framer-motion'
import { theme } from '../../helpers/theme'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import styled from 'styled-components'

export type FilterValuesType = 'all' | 'active' | 'completed'

const getTasks = (state: AppRootStateType) => state.tasks

export const TodoList = (props: DarkModeProps) => {
  const dispatch = useDispatch()
  const tasks = useSelector(getTasks)
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState(null as string | null)
  const [filter, setFilter] = useState('all' as FilterValuesType)

  const addTask = async () => {
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

  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return
    dispatch(changeOrderAC(result.source.index, result.destination.index))
  }

  return (
    <HelmetProvider>
      <Conteiner>
        <Helmet>
          <title>Artem Saibel - TodoList app</title>
          <meta name='description' content='Todo List App with React (using Hooks and Contexts)' />
        </Helmet>
        <Wrapper darkMode={props.darkMode}>
          <BackgroundWrapper darkMode={props.darkMode}>
            <TitleWrapper darkMode={props.darkMode}>{getDate()[0]}</TitleWrapper>
            <TitleWrapper darkMode={props.darkMode}>{getDate()[1]}</TitleWrapper>
          </BackgroundWrapper>
          <TodoInputWrapper
            darkMode={props.darkMode}
            type='text'
            placeholder='Enter your task...'
            onChange={event => {
              setError(null)
              setNewTask(event.target.value)
            }}
            value={newTask}
            onKeyDown={event => (event.key === 'Enter' ? addTask() : null)}
          />
          <Div_ErrorMessage>{error && <Error_Div> {error} </Error_Div>} </Div_ErrorMessage>
          <div>
            <DragDropContext onDragEnd={onDragEndHandler}>
              <Droppable droppableId='tasks'>
                {provided => (
                  <Ul {...provided.droppableProps} ref={provided.innerRef}>
                    {filteredTodolist(filter).map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <MapTasksWrapper
                            darkMode={props.darkMode}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <MapTodosWrapper>
                              <IconsWrapper>
                                <CheckBoxWrapper
                                  type='checkbox'
                                  onClick={() => statusTodoList(task.id, task.isDone)}
                                  defaultChecked={task.isDone}
                                />
                                <Text isDone={task.isDone}> {task.task}</Text>
                                <ButtonsTaskWrapper>
                                  <CgTrash
                                    onClick={() => removeTask(task.id)}
                                    style={{ cursor: 'pointer' }}
                                  />
                                </ButtonsTaskWrapper>
                              </IconsWrapper>
                            </MapTodosWrapper>
                          </MapTasksWrapper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <FilterWrapper>
            <FilterItemWraper
              darkMode={props.darkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFilter('all')}
            >
              ALL
            </FilterItemWraper>
            <FilterItemWraper
              darkMode={props.darkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFilter('active')}
            >
              ACTIVE
            </FilterItemWraper>
            <FilterItemWraper
              darkMode={props.darkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFilter('completed')}
            >
              COMPLETED
            </FilterItemWraper>
          </FilterWrapper>
        </Wrapper>
      </Conteiner>
    </HelmetProvider>
  )
}

const Error_Div = styled.div`
  padding-top: 5px;
  text-align: center;
  color: red;
`
const Ul = styled.ul`
  padding: 0;
`
const Div_ErrorMessage = styled.div`
  justify-content: center;
  font-size: ${theme.fonts.small};
`
const Conteiner = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div<{ darkMode: boolean }>`
  width: 550px;
  min-height: 50vh;
  background-color: ${props => (props.darkMode ? theme.colors.dark : 'white')};
  box-shadow: ${theme.colors.boxShadow3};
  border-radius: 10px;
  ${theme.breakpoint.phone} {
    width: 80%;
  }
`
const BackgroundWrapper = styled.div<{ darkMode: boolean }>`
  padding: 2.7em;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-image: ${props =>
      props.darkMode
        ? theme.background.filterButtonBackgroundDark
        : theme.background.backgroundImage},
    url('https://images.unsplash.com/photo-1553335538-efce787fe4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const TitleWrapper = styled.div<{ darkMode: boolean }>`
  font-size: ${theme.fonts.medium};
  text-align: center;
  margin-bottom: -0.3rem;
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.textShadow};
`

const TodoInputWrapper = styled.input<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? theme.colors.dark : theme.colors.lily)};
  color: ${props => (props.darkMode ? theme.colors.white : theme.colors.dark)};
  border: none;
  font-size: ${theme.fonts.small};
  margin: 0;
  padding: 1em 1em;
  width: 100%;
`
const MapTasksWrapper = styled.li<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${props =>
    props.darkMode ? theme.colors.superBlack : theme.background.taskBackground};
  margin: 0.2rem;
  &:hover {
    background-color: ${props => (props.darkMode ? theme.colors.dark : theme.colors.lily)}
`
const MapTodosWrapper = styled.span`
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${theme.fonts.small};
  width: 100%;
`
const ButtonsTaskWrapper = styled.div`
  opacity: 0;
`
const Text = styled.div<{ isDone: boolean }>`
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`

const IconsWrapper = styled.div`
  justify-content: space-between;
  align-items: baseline;
  display: flex;
  padding: 12px;
  gap: 1.2rem;
  cursor: pointer;
  &:hover ${ButtonsTaskWrapper} {
    opacity: 1;
  }
`
const CheckBoxWrapper = styled.input`
  height: 20px;
  width: 15px;
`
const FilterWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  ${theme.breakpoint.phone} {
    gap: 0.2rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
const FilterItemWraper = styled(motion.span)<{ darkMode: boolean }>`
  font-size: 18px;
  background-image: ${props => (props.darkMode ? 'none' : theme.background.filterButtonBackground)};
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid ${theme.colors.white};
  color: ${props => (props.darkMode ? theme.colors.white : theme.colors.black)};
  padding: 10px 20px;
  ${theme.breakpoint.phone} {
    font-size: ${theme.fonts.xs};
    padding: 15px 20px;
    border: 1px solid ${theme.colors.white};
  }
`
