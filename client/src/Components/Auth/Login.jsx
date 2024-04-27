import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="h-screen flex flex-col items-center justify-center md:pt-0 pt-5">
			<div className="border rounded p-5 flex flex-col items-center justify-center gap-7 md:w-1/2 full shadow-lg backdrop-blur-lg">
				{/* <div className="w-full">
                    <p className="p-5 w-full border shadow-lg rounded bg-red-600 text-white">Invalid email or password</p>
                </div> */}
				<div>
					<h1 className="text-3xl">Login</h1>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-5">
					<form className="flex justify-center items-center flex-col gap-7 w-full">
						<div className="flex flex-col gap-5 md:w-3/4 w-full">
							<div className="flex flex-col gap-3 w-full">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your email"
									className="border px-6 py-1 w-full rounded"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									placeholder="Enter your password"
									className="border px-6 py-1 rounded"
								/>
							</div>
						</div>

						<div className="md:w-3/4 w-full">
							<button className="login-button w-full">
								Login
							</button>
						</div>
					</form>
					<div className="w-full h-0.5 shadow-lg bg-gray-500 rounded"></div>

					<div className="flex flex-col justify-center items-center gap-3">
						<h4 className="font-lexend-exa text-md">Other login options</h4>
						<div className="flex gap-3">
							<button className="social-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
							</button>
							<button className="social-button">
								<svg
									width="25"
									height="25"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
						</div>
					</div>

					{/* <div className="w-full h-0.5 bg-gray-500 rounded"></div> */}

					<div className="flex flex-col justify-center items-center gap-3">
						<Link to="/forgot-password">Forgot Password?</Link>
						<div>
							<p>
								Don&rsquo;t have an account?{" "}
								<span>
									<Link href="/register" className="">
										Register
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

export default Login;
