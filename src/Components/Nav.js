// This file holds the component that is commont through out the UI
// It has NavLink that enbles the user to move in and out of components at will

import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
	return (
		<div className="nav">
			<div className="inner_nav">
				<h1>B.Blogs</h1>
				<p className="p1">behind good reads</p>
				<div className="btn">
					<NavLink className="grey btn_nav " to="/sign_up">
						Sign Up
					</NavLink>
					<NavLink className="blue btn_nav " to="/login">
						Login
					</NavLink>
				</div>
				<ul>
					<NavLink className="li" style={{ textDecoration: "none" }} to="/">
						HOME
					</NavLink>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
