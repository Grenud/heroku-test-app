import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/bayava")
			.then((res) => {
				setData(res.data.rows);
				console.log(res.data.rows);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="h-screen flex flex-wrap items-center justify-center gap-10">
			{data.map((item, index) => {
				const firstName = item.instructor__c.split(" ")[0];
				return (
					<div key={index}>
						<div className="max-w-sm rounded overflow-hidden shadow-lg">
							<img
								className="object-cover h-48 w-96"
								src={item.cover_photo__c}
							/>
							<div className="px-6 py-4">
								<div className="flex justify-between items-center gap-3">
									<div className="font-bold text-xl mb-2">
										{item.name}
									</div>
									<div className="text-gray-700 text-base">
										Instructor :{" "}
										<span className="font-semibold">
											{firstName}
										</span>
									</div>
								</div>
								<div className="flex justify-between items-center gap-3">
									<p>Starts : {item.start_date__c}</p>
									<p>Ends : {item.end_date__c}</p>
								</div>
							</div>
							<div className="px-6 py-4 flex items-center justify-between">
								<h3 className="text-2xl text-gray-700 font-black">
									{item.mode__c}
								</h3>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Enroll
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
