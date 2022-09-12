import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "../css/MyBlogs.css"
import BlogCell from './BlogCell'

function MyBlogs() {

    const[myBlogs, setMyBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/blogs")
        .then((res) => res.json())
        .then((data) => setMyBlogs(data))
      },[])

      function handleDeletePost(deletedPost){
        const updatedPosts = myBlogs.filter((blog) => blog.id !== deletedPost.id);
        setMyBlogs(updatedPosts);
      }

  return (
    <div className='myBlog'>
      <Link to="/post">post an article</Link>
        {
            myBlogs.map((blog,i) => {
                return <BlogCell
                key={i}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                category={blog.category}
                image={blog.imgUrl}
                createdOn={blog.createdOn}
                author={blog.author}
                blog={blog}
                onDeletePost={handleDeletePost}
               />
            })
        }
    </div>
  )
}

export default MyBlogs