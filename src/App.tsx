import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import ContactForm from "./components/ContactForm";

function App() {
	return (
		<>
			<div className="px-10">
				<Router>
					<div className="grid grid-cols-6 min-h-screen">
						<Navbar />
						<div className="border col-span-5">
							<Routes>
								<Route path="/" element={<Contacts />} />
								<Route path="/add" element={<ContactForm />} />
								<Route path="/data" element={<h1>Data</h1>} />
							</Routes>
						</div>
					</div>
				</Router>
			</div>
		</>
	);
}

export default App;
