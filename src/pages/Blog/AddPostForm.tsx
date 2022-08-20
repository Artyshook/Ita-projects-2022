import { text } from 'stream/consumers'
import { useLocalStorage } from '../../helpers/functions'
import { v1 } from 'uuid'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import React, { Dispatch, useState } from 'react'

type PropsType = {
  formShown: boolean
  setFormShown: Dispatch<boolean>
  formData: FormData[]
  setFormData: Dispatch<FormData[]>
}

export type FormData = {
  id: string
  title: string
  post: string
  link: string
}
export const AddPostForm = (props: PropsType) => {
  const [formData, setFormData] = useLocalStorage<FormData[]>('blog', [])
  const [title, setTitle] = useState('enter')
  const [postText, setPostText] = useState('')
  // const [slug, setSlug] = useState('')

  console.log(title, postText)
  function convertToSlug() {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const addToLS = () => {
    props.setFormData([
      { id: v1(), title: title, link: convertToSlug(), post: postText },
      ...props.formData,
    ])
  }

  return (
    <div>
      <Modal show={props.formShown} onHide={() => props.setFormShown(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Start your new story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Enter a title for your post</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                onChange={event => {
                  setTitle(event.currentTarget.value)
                }}
              />
            </Form.Group>
            {/*<Button variant='primary' onClick={createVideo}>*/}
            {/*  Save Changes*/}
            {/*</Button>*/}
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Add text</Form.Label>
              {/*<Form.Control type='file' onChange={e => setFormDataVideo(e.target.files[0])} />*/}
              <Form.Control
                as='textarea'
                rows={10}
                onChange={event => {
                  setPostText(event.currentTarget.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={addToLS}
            // disabled={disable}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
