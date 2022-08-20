import { FormData } from './AddPostForm'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import { useParams } from 'react-router'
import Markdown, { compiler } from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'

export const BlogPage = () => {
  const { id } = useParams()
  const blogData = localStorage.getItem('blog')
  const [blog, setBlog] = useState([] as FormData[])
  const myData: FormData[] = JSON.parse(blogData ?? '')

  useEffect(() => {
    let post = myData?.filter(post => post.id === id)

    if (post) {
      setBlog(post)
    }
  }, [])

  const markdown = () => {
    return <Markdown>{blog[0]?.post}</Markdown>
  }

  return (
    <>
      <>
        <Link className='blog-goBack' to='/blog'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <div className='blog-wrap'>
            <header>
              <div>{blog[0]?.post}</div>
              {/*<div>{markdown()}</div>*/}
            </header>
          </div>
        ) : (
          <div></div>
        )}
      </>
    </>
  )
}
