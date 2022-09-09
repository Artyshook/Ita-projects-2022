import { AddPostContext } from './PostContext'
import { options2 } from '../../../helpers/data'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import React, { useContext } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

export const AddPostForm = () => {
  const logic = useContext(AddPostContext)
  return (
    <div>
      <Modal
        show={logic.formShown}
        onHide={() => {
          logic.resetStates()
          logic.setFormShown(false)
          logic.setError(null)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Start your new story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter a title for your post</Form.Label>
              <Form.Control
                as='textarea'
                rows={1}
                value={logic.title}
                onChange={event => {
                  logic.setTitle(event.currentTarget.value)
                  logic.setError(null)
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Choose category</Form.Label>
              <Select
                options={options2}
                value={options2.filter(option => option.value === logic.category)}
                onChange={e => {
                  if (e === null) return
                  logic.setCategory(e.value)
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Add text, We support Markdown :)</Form.Label>
              <Form.Control
                value={logic.postText}
                as='textarea'
                rows={10}
                onChange={event => {
                  logic.setPostText(event.currentTarget.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {logic.error && <ErrorMessage>{logic.error}</ErrorMessage>}
          <Button variant='primary' onClick={logic.inputCheck}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`
