import React from "react";
import "../css/Category.css";

function Category({ onCategoryChange }) {
	return (
		<div className="select">
			<select className="drop" name="filter" onChange={onCategoryChange}>
				<option value="All">Filter by category</option>
				<option value="Food">Food</option>
				<option value="Politics">Politics</option>
				<option value="Technology">Technology</option>
				<option value="Lifestyle">Lifestyle</option>
			</select>
		</div>
	);
}

export default Category;
