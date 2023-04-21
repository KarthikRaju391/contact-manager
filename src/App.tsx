import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import ContactForm from "./pages/ContactForm";
import { useEffect, useState } from "react";

function App() {
	const [screenSize, setScreenSize] = useState("");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 680) {
				setScreenSize("small");
			} else if (window.innerWidth) {
				setScreenSize("medium");
			} else {
				setScreenSize("large");
			}
		};

		window.addEventListener('resize', handleResize)

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []);

	return (
		<>
			<div>
				<Router>
					<div className="grid grid-cols-4 lg:grid-cols-6 min-h-screen">
						<Navbar screenSize={screenSize}/>
						<div className="col-span-3 lg:col-span-5">
							<Routes>
								<Route path="/" element={<Contacts screenSize={screenSize}/>} />
								<Route path="/add" element={<ContactForm />} />
								<Route path="/edit/:id" element={<ContactForm />} />
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
