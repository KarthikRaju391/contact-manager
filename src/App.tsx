import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import ContactForm from "./pages/ContactForm";
import { useState, useEffect } from "react";
import ChartsAndMaps from "./pages/ChartsAndMaps";

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

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<div>
				<Router>
					<div className="flex min-h-screen border">
						<Navbar screenSize={screenSize} />
						<div className="ml-16 md:ml-32 flex-1">
							<Routes>
								<Route
									path="/"
									element={<Contacts screenSize={screenSize} />}
								/>
								<Route path="/add" element={<ContactForm />} />
								<Route path="/edit/:id" element={<ContactForm />} />
								<Route path="/data" element={<ChartsAndMaps />} />
							</Routes>
						</div>
					</div>
				</Router>
			</div>
		</>
	);
}

export default App;
