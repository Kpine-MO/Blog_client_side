// This component has POST request that enables one to sign up as a user, this information is then passed on to the users table in the back end database

// The form also directs one to the myBlogs component after successful  sign up


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";

function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLasttName] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			navigate("/sign_up");
		}
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		const user = {
			first_name: firstName,
			last_name: lastName,
			user_name: userName,
			email: email,
			password: password,
		};

		let result = await fetch("http://localhost:9292/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		result = await result.json();
		localStorage.setItem("user-info", JSON.stringify(result));
		navigate("/my_account");

		setFirstName("");
		setLasttName("");
		setUserName("");
		setPassword("");
		setEmail("");
	}

	return (
		<div className="sign_up">
			<form onSubmit={handleSubmit} action="/my_account">
				<h1 className="H1">B.Blogs</h1>
				<h3 className="H2">Welcome</h3>
				<h6 className="sign_P">Sign Up to B.Blog</h6>

				<input
					className="sign_input"
					type="text"
					name="first name"
					value={firstName}
					required
					onChange={(e) => setFirstName(e.target.value)}
					placeholder="first name"
				/>

				<input
					className="sign_input"
					type="text"
					name="last name"
					required
					value={lastName}
					onChange={(e) => setLasttName(e.target.value)}
					placeholder="last name"
				/>

				<input
					className="sign_input"
					type="text"
					name="user name"
					required
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder="user name"
				/>

				<input
					className="sign_input"
					type="email"
					name="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
				/>

				<input
					className="sign_input"
					type="password"
					name="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
				/>
				<br />
				<button className="btn_signup" type="submit">
					post
				</button>
			</form>
		</div>
	);
}

export default SignUp;
