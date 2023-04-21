import { Link } from "react-router-dom";

const Contacts = () => {
	return (
		<div className="flex flex-col items-center mt-4">
			<h1 className="text-4xl font-bold">Contacts</h1>	
			<Link to="/add">Add Contact</Link>
		</div>
	);
};

export default Contacts;
