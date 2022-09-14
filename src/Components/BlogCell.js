// This is the container component of each blog object in our database, it has the props passed down from parent component
//It also houses the delete fetch request since, this is because of the presence of the delete
//button in this component that will initiat the delete action

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/BlogCell.css";

function BlogCell({
	title,
	id,
	content,
	category,
	createdOn,
	author,
	onDeletePost,
	blog,
	image,
}) {

	function deletePost() {
		fetch(`http://localhost:9292/blogs/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then(() => onDeletePost(blog));
	}

	function edit() {
		console.log(id);
	}

	return (
		<div className="blogCell">
			<div className="cell">
				<div className="flex">
					<h3>{title}</h3>
				</div>
				<span className="span">
					<img src={image} className="image" />
					<h5 className="date">
						posted on {createdOn} by {author}
					</h5>
				</span>
				<h6>{content}</h6>
				<span>
					<h5 className="category">
						<i>category :</i> {category}
					</h5>
				</span>
				<button className="btn_left">EDIT</button>
				<button className="btn_right" onClick={deletePost}>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default BlogCell;
