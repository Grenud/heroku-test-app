import React from "react";
import Routers from "./Routers/Router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routers />
			</BrowserRouter>
		</div>
	);
}

export default App;
