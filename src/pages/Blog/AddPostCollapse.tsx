import 'react-toastify/dist/ReactToastify.css'
import { BlogContext } from './Blog'
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap'
import { CgAddR } from 'react-icons/cg'
import { ToastContainer, toast } from 'react-toastify'
import { options } from '../../helpers/data'
import { theme } from '../../helpers/theme'
import { useAsyncComponentDidMount } from '../../helpers/UseComponentDidMount'
import { wave } from '../../WebsitePage/components/home/Home'
import Modal from 'react-bootstrap/Modal'
import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

export const AddPostCollapse = () => {
  const logic = useContext(BlogContext)
  const toggle = () => logic.setFormShown(!logic.formShown)

  const customStyles = {
    option: () => ({
      color: 'black',
      fontSize: theme.fonts.small,
      padding: '4px',
      paddingLeft: '2%',
      '&:hover': {
        background: theme.colors.lightBlue,
      },
    }),
  }

  const onClickHandler = () => {
    logic.inputCheck()
  }

  return (
    <React.StrictMode>
      <Button_MyButton onClick={toggle} style={{ marginBottom: '1rem' }}>
        <CgAddR size='2rem' />
        Add article
      </Button_MyButton>
      <Collapse isOpen={logic.formShown}>
        <Form>
          <FormGroup>
            <Label>Enter a title for your post</Label>
            <Input
              rows={1}
              value={logic.title}
              onChange={event => {
                logic.setTitle(event.currentTarget.value)
                logic.setError(null)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Choose category</Label>
            <Select
              styles={customStyles}
              options={options}
              value={options.filter(option => option.value === logic.category)}
              onChange={e => {
                if (e === null) return
                logic.setCategory(e.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Add text, We support Markdown :)</Label>
            <Input
              value={logic.postText}
              type='textarea'
              rows={10}
              onChange={event => {
                logic.setPostText(event.currentTarget.value)
              }}
            />
          </FormGroup>
          <>
            {logic.error ? <ErrorMessage>{logic.error}</ErrorMessage> : null}
            <Button_Add onClick={onClickHandler}>Save</Button_Add>
          </>
        </Form>
      </Collapse>
    </React.StrictMode>
  )
}

const MessageError = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Loading = styled.span`
  font-size: ${theme.fonts.small};
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const Button_MyButton = styled.button`
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${theme.background.lightBlue};
  height: 4.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${theme.colors.blue2};
  }
`
const Button_Add = styled(Button)`
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${theme.background.lightBlue};
  padding: 5px;
`
const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`
