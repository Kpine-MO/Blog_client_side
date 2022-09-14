import React from "react";
import "../css/Footer.css";
import {
	FaFacebookSquare,
	FaTwitter,
	FaInstagram,
	FaDribbble,
	FaLinkedin,
} from "react-icons/fa";

function Footer() {
	let iconStyles = {
		fontSize: "2.5em",
		color: "grey",
		padding: "10px",
		cursor: "pointer",
	};

	return (
		<div className="footer">
			<div className="top">
				<FaFacebookSquare style={iconStyles} className="book" />
				<FaTwitter style={iconStyles} />
				<FaInstagram style={iconStyles} />
				<FaDribbble style={iconStyles} />
				<FaLinkedin style={iconStyles} />
			</div>
			<div className="container">
				<div className="subConLeft">
					<h2>work</h2>
					<h2>blog</h2>
					<h2>post</h2>
				</div>

				<div className="subConCentre">B.Blogs</div>

				<div className="subConRight">
					<h2>about</h2>
					<h2>contact us</h2>
				</div>
			</div>
		</div>
	);
}

export default Footer;
