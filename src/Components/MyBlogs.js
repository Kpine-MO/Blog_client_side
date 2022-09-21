// This component allows the user to fully interract with the application since this is the only place where a signed up user can post, edit or delete there article

// It also houses the users Blogs

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/MyBlogs.css";
import BlogCell from "./BlogCell";
import useQuery from "./useQuery";

function MyBlogs() {
	const { data: myBlogs, setData: setMyBlogs} = useQuery("http://localhost:9292/blogs");

	function handleDeletePost(deletedPost) {
		const updatedPosts = myBlogs.filter((blog) => blog.id !== deletedPost.id);
		setMyBlogs(updatedPosts);
	}

	return (
		<div className="myBlog">
			<br />
			<Link className="post_link" to="/post">
				post an article
			</Link>
			{myBlogs.map((blog, i) => {
				return (
					<BlogCell
						key={i}
						id={blog.id}
						title={blog.title}
						content={blog.content}
						category={blog.category}
						image={blog.imgUrl}
						createdOn={blog.createdOn}
						author={blog.author}
						blog={blog}
						allBlogs={myBlogs}
                        setMyBlogs={setMyBlogs}
						onDeletePost={handleDeletePost}
					/>
				);
			})}
		</div>
	);
}

export default MyBlogs;
