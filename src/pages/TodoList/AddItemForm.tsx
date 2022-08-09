import { Div_Button } from './TodoList'
import { colors, fonts } from '../../helpers/theme'
import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
//
// type AddItemFormPropsType = {
//   addItem: (title: string) => void
// }
//
// export function AddItemForm(props: AddItemFormPropsType) {
//   let [title, setTitle] = useState('')
//   let [error, setError] = useState<string | null>(null)
//
//   const addItem = () => {
//     if (title.trim() !== '') {
//       props.addItem(title)
//       setTitle('')
//     } else {
//       setError('Title is required')
//     }
//   }
//
//   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value)
//   }
//
//   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//     setError(null)
//     if (e.charCode === 13) {
//       addItem()
//     }
//   }
//
//   return (
//     <div>
//       <Input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
//       <Div_Button onClick={addItem}>+</Div_Button>
//     </div>
//   )
// }
//
// const Div_Button = styled.button`
//   letter-spacing: 1px;
//   font-size: 1.5rem;
//   border-radius: 60px;
//   color: #00ff7f;
//   background-color: ${colors.blue};
//   padding: 0;
//   margin: 0;
//   border: none;
//   height: 5rem;
//   width: 7rem;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background: ${colors.blue2};
//   }
// `
// const Input = styled.input`
//   padding: 1.5rem;
//   border: 0.3rem solid ${colors.green};
//   outline: none;
//   border-radius: 30px;
//   width: 15rem;
//   height: 1.5rem;
//   color: ${colors.blue};
//   font-size: ${fonts.small};
// `
