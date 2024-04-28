import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreateProduct() {

    const [course, setCourse] = useState({
        name: "",
        description: "",
        instructor__c: "",
        start_date: "",
        end_date: "",
        mode__c: "",
        // cover_photo: ""
    })

    const handleChange = (e) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(course)
        axios.post("http://localhost:8000/api/bayava", course)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }



	return (
		<div className="min-h-screen flex flex-col items-center justify-center md:py-20 py-36 md:p-0 p-5">
			<div className="border rounded p-5 flex flex-col items-center justify-center gap-7 md:w-1/2 full shadow-lg backdrop-blur-lg">
				{/* <div className="w-full">
                    <p className="p-5 w-full border shadow-lg rounded bg-red-600 text-white">Invalid email or password</p>
                </div> */}
				<div>
					<h1 className="text-3xl text-center">Create Courses</h1>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-5">
					<form className="flex justify-center items-center flex-col gap-7 w-full">
						<div className="flex flex-col gap-5 md:w-3/4 w-full">
							<div className="flex flex-col gap-3 w-full">
								<label>Course Title</label>
								<input
									type="text"
                                    name="name"
                                    onChange={handleChange}
									placeholder="Enter your Course Title"
									className="border px-6 py-1 w-full rounded"
								/>
							</div>
                            {/* <div className="flex flex-col gap-3 w-full">
                                <label>Course Description</label>
                                <textarea
                                    placeholder="Enter your Course Description"
                                    className="border px-6 py-1 w-full rounded"
                                />
                            </div> */}
                            <div>
                                <label>Course Instructor</label>
                                <input
                                    type="text"
                                    name="instructor__c"
                                    onChange={handleChange}
                                    placeholder="Enter your Course Instructor"
                                    className="border px-6 py-1 w-full rounded"
                                />
                            </div>
                            <div>
                                <label>Course Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    onChange={handleChange}
                                    className="border px-6 py-1 w-full rounded"
                                />
                            </div>
                            <div>
                                <label>Course End Date</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    onChange={handleChange}
                                    className="border px-6 py-1 w-full rounded"
                                />
                            </div>
                            <div>
                                <label>Course Mode</label>
                                <select
                                    className="border px-6 py-1 w-full rounded"
                                    onChange={handleChange}
                                    name="mode__c"
                                >
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <div>
                                <label>Course Cover Photo</label>
                                <input
                                    type="file"
                                    className="border px-6 py-1 w-full rounded"
                                    name="cover_photo"
                                />
                            </div>

						</div>

						<div className="md:w-3/4 w-full">
							<button onClick={handleSubmit} className="button w-full">
								Add Course
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	);
}

export default CreateProduct;
