import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";

function App() {
	return (
		<>
			<div>
				<Router>
					<div className="grid grid-cols-2">
						<Navbar />
						<Routes>
							<Route path="/" element={<Contacts />} />
							<Route path="/data" element={<h1>Data</h1>} />
						</Routes>
					</div>
				</Router>
			</div>
		</>
	);
}

export default App;
