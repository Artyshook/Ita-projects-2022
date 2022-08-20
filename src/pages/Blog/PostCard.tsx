import { Link, Route, Routes } from 'react-router-dom'
import { urls } from '../../helpers/urls'
import { useLocalStorage } from '../../helpers/functions'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react'

type PropsType = {
  title: string
  post: string
  link: string
  id: string
}

export const PostCard = (props: PropsType) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src='https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png'
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.post}</Card.Text>
        <Link to={`/blog/${props.id}`}>➝</Link>
      </Card.Body>
    </Card>
  )
}
