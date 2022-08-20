import { AddPostForm, FormData } from './AddPostForm'
import { Button } from 'react-bootstrap'
import { CgAddR } from 'react-icons/cg'
import { PostCard } from './PostCard'
import { useLocalStorage } from '../../helpers/functions'
import React, { useState } from 'react'

export const blogData = localStorage.getItem('blog')
// console.log(blogData)

export const Blog = () => {
  const [formShown, setFormShown] = useState(false)
  const [formData, setFormData] = useLocalStorage<FormData[]>('blog', [])

  const postsElements = () => {
    return formData.map(el => (
      <PostCard post={el.post} title={el.title} link={el.link} key={el.id} id={el.id} />
    ))
  }

  return (
    <div>
      <div>All Articles</div>
      <div>Create Article</div>
      <Button variant='primary' onClick={() => setFormShown(true)}>
        <CgAddR size='2rem' />
        Add post
      </Button>
      <AddPostForm
        formShown={formShown}
        setFormShown={setFormShown}
        formData={formData}
        setFormData={setFormData}
      />
      {postsElements()}
    </div>
  )
}
