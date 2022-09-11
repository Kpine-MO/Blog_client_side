// import React,{useEffect, useState} from 'react'
// import BlogCell from './BlogCell'
// import Category from './Category'
// import PostArticle from './PostArticle'
// import '../css/Home.css'

// function Home() {

//     const[allBlogs, setAllBlogs] = useState([])
//     const[searchQuery, setSearchQuery] = useState("")
//     const [selectedCategory, setSelectedCategory] = useState("All");

//     function handleCategoryChange(event) {
//         setSelectedCategory(event.target.value);
//       }
    

//     useEffect(() => {
//         fetch("http://localhost:9292/blogs")
//         .then((res) => res.json())
//         .then((data) => setAllBlogs(data))
//       },[])

//   return (
//     <div className='home'>
//       <div className='home_left'>
//         {
//             allBlogs.filter((result) =>  {
//               if(setSearchQuery==="" || selectedCategory === "All"){
//                 return true
//               } else if(result.category.toLowerCase().includes(searchQuery.toLowerCase())){
//                 return result.category === selectedCategory;
//               }
//             }).map((blog,i) => {
//                 return <BlogCell
//                 key={i}
//                 title={blog.title}
//                 content={blog.content}
//                 category={blog.category}
//                 image={blog.imgUrl}
//                 createdOn={blog.createdOn}
//                 author={blog.author}
//                />
//             })
//         }
//       </div>

//       <div className='home_right'>
//             <div className='search'>
//                 <span> <input type="text" placeholder="Search after filter..." onChange={event => setSearchQuery(event.target.value)} value={searchQuery} className="show"/><button className='btn_home'>search</button></span>
//                  {/* <h4>Category</h4>
//                  <ul className='homeUl'>
//                   <li className='homeLi'>Food</li>
//                   <li className='homeLi'>politics</li>
//                   <li className='homeLi'>Technology</li>
//                   <li className='homeLi'>Lifestyle</li>
//                  </ul> */}
//                  <Category onCategoryChange={handleCategoryChange}/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home