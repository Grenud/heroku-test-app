import React from "react";
import Routers from "./Routers/Router";
import { BrowserRouter } from "react-router-dom";

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
