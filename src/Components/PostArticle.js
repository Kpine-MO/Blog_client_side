// import React, {useState} from 'react'
// import '../css/Post.css'

// function PostArticle() {

//      const[title, setTitle] = useState("")
//      const[content, setContent] = useState("")
//      const[author, setAuthor] = useState("")
//      const[date, setDate] = useState("")
//      const[category, setCategory] = useState("")
//     //  const[image, setImage] = useState("")

//       async function handleSubmit(event){
//         event.preventDefault();
      
//         const newPost = { 
//             title: title,
//             content: content,
//             author: author,
//             createdOn: date,
//             // imgUrl: image,
//             category: category
//           };

//           console.log(title,content,author,date,category)
//          let result = await fetch("http://localhost:9292/blogs", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPost),
//           })
//           result = await result.json()
      
//           setContent("")
//           setAuthor("")
//           setDate("")
//           setTitle("")
//         }
      

//       return (
//         <div className='post'>
//            <form className="NewPost" onSubmit={handleSubmit}>
    
//                <input className='post_input' type="text" value={title} name="title" placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
//               <br/>
    
//                <textarea className='post_input' rows='4' value={content} name="content" placeholder='content' onChange={(e) => setContent(e.target.value)}/>
    
//               <br/>
      
//                <input className='post_input' type="text" value={author} name="author" placeholder="author's name" onChange={(e) => setAuthor(e.target.value)}/>
    
//               <br/>

//               {/* <input type="file" value={image} onChange={(e) => setImage(e.target.value)}/> */}

//               <br/>
    
//                <input className='post_input small' type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
    
//               <br/>

//               {/* <input type="file"/> */}
    
//                <select className='post_input small' name="category" onChange={(e) => setCategory(e.target.value)}>
//                   <option value="category">category</option>
//                   <option value="Food">Food</option>
//                   <option value="Politics">Politics</option>
//                   <option value="Technology">Technology</option>
//                   <option value="Lifestyle">Lifestyle</option>
//                </select>
    
//               <br/>
//              <button className='btn_post' type="submit">Post</button>
//            </form>
//         </div>
//   )
// }

// export default PostArticle