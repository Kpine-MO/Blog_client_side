// This component houses/displays all the blogs avsilable in the databse
// It houses the search area and a filter selections, this works by filtering the blog category the user is interested in the using the search area to search through the authors of the articles

import React, { useEffect, useState } from "react";
import BlogCell from "./BlogCell";
import Category from "./Category";
import Comments from "./useQuery";
import useQuery from "./useQuery";
import PostArticle from "./PostArticle";
import "../css/Home.css";

function Home() {
	// const[allBlogs, setAllBlogs] = useState([])
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [show, setShow] = useState(true);

	const { data: allBlogs } = useQuery("http://localhost:9292/blogs");

	function handleAdvert() {
		setShow((show) => !show);
	}

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	return (
		<div className="home">
			<div className="home_left">
				{allBlogs
					.filter((result) => {
						if (setSearchQuery === "" || selectedCategory === "All") {
							return true;
						} else if (
							result.category.toLowerCase().includes(searchQuery.toLowerCase())
						) {
							return result.category === selectedCategory;
						}
					})
					.map((blog, i) => {
						return (
							<BlogCell
								key={i}
								title={blog.title}
								content={blog.content}
								category={blog.category}
								image={blog.imgUrl}
								createdOn={blog.createdOn}
								author={blog.author}
							/>
						);
					})}
			</div>

			<div className="home_right">
				<div className="search">
					<span>
						{" "}
						<input
							type="text"
							placeholder="Search after filter..."
							onChange={(event) => setSearchQuery(event.target.value)}
							value={searchQuery}
							className="show"
						/>
						<button className="btn_home">search</button>
					</span>
					<Category onCategoryChange={handleCategoryChange} />
					<button className="btn_advert" onClick={handleAdvert}>
						x
					</button>
					{show ? (
						<div className="advert"></div>
					) : (
						<div className="no_advert"></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
