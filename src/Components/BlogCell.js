import React from 'react'
import '../css/BlogCell.css'

function BlogCell({title,id, content, category, createdOn, author, onDeletePost,blog, image}) {

  function deletePost(){
    fetch(`http://localhost:9292/blogs/${id}`,{
        method: "DELETE"
      })
      .then((res) => res.json())
      .then(() => onDeletePost(blog))
}

  return (
    <div className='blogCell'>
       <div className='cell'>
         <div className='flex'>
           <h3>{title}</h3>
         </div>
          <span className='span'>
             <img src={image} className="image"/> 
             <h5 className='date'>posted on {createdOn} by {author}</h5>
          </span>
           {/* <div>
             <img src={image}/>
           </div> */}
           <h6>{content}</h6>
           <span>
            <h5 className='category'><i>category :</i> {category}</h5>
            </span>
            <button className='btn_left'>EDIT</button>
            <button className='btn_right' onClick={deletePost}>DELETE</button>
       </div>
    </div>
  )
}

export default BlogCell

// key={i}
// title={blog.title}
// content={blog.content}
// category={blog.category}
// image={blog.imgUrl}
// createdOn={blog.createdOn}
// author={blog.author}