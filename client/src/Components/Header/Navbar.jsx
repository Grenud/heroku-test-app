import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="fixed top-0 left-0 z-100 w-full flex flex-col items-center justify-center">
			<nav className="backdrop-blur-lg fixed top-0 left-0 w-full h-16 flex items-center justify-between px-10 shadow-lg z-100">
				<div>
					<Link to="/" className="logo">
						<h1 className="">Bayava</h1>
					</Link>
				</div>
				<div>
					<ul className="flex justify-center items-center gap-7 font-lexend-exa">
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex justify-center items-center gap-3 font-lexend-exa">
						<li>
							<Link
								className="link-outline-button"
								to="/register"
							>
								Register
							</Link>
						</li>
						<div className="w-0.5 h-8 bg-gray-500 rounded"></div>
						<li>
							<Link className="link-button" to="/login">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
