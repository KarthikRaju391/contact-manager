import { Link } from "react-router-dom";

const AddContactButton = () => {
	return (
		<Link
			className="bg-slate-800 text-slate-100 py-3 px-4 rounded-md"
			to="/add"
		>
			Add Contact
		</Link>
	);
};

export default AddContactButton;
