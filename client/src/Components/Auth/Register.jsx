import React from "react";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center md:mt-10 mt-24 p-14">
			<div className="border rounded p-5 flex flex-col items-center justify-center gap-7 md:w-1/2 full shadow-lg backdrop-blur-lg">
				{/* <div className="w-full">
                    <p className="p-5 w-full border shadow-lg rounded bg-red-600 text-white">Invalid email or password</p>
                </div> */}
				<div>
					<h1 className="text-3xl">Register</h1>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-5">
					<form className="flex justify-center items-center flex-col gap-7 w-full">
						<div className="flex flex-col gap-5 md:w-3/4 w-full">
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									placeholder="Enter your First Name"
									className="border px-6 py-1 w-full rounded"
								/>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									placeholder="Enter your Last Name"
									className="border px-6 py-1 w-full rounded"
								/>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your email"
									className="border px-6 py-1 w-full rounded"
								/>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									placeholder="Enter your password"
									className="border px-6 py-1 rounded"
								/>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="password">Confirm Password</label>
								<input
									type="password"
									id="password"
									placeholder="Enter your password again"
									className="border px-6 py-1 rounded"
								/>
							</div>
							<div>
								<label htmlFor="address">Address</label>
								<textarea
									placeholder="Enter your address"
									className="border px-6 py-1 w-full rounded"
								></textarea>
							</div>
							<div className="flex items-center justify-center">
								<p>
									By registering, you agree to our{" "}
									<span className="text-blue-500">
										Terms & Conditions
									</span>
								</p>
							</div>
						</div>

						<div className="md:w-3/4 w-full">
							<button className="button w-full">
								Register
							</button>
						</div>
					</form>

					<div className="flex flex-col justify-center items-center gap-3">
						<div>
							<p>
								Already have an account?{" "}
								<span>
									<Link to="/login" className="">
										Login Here
									</Link>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
