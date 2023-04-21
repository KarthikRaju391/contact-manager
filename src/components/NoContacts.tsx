import { XCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const NoContacts = () => {
	const navigate = useNavigate();

	return (
		<div className="w-5/6 mx-auto flex mt-20 justify-evenly items-center p-4 border border-red-500 bg-red-200 rounded-md">
			<XCircle size={35} color="#ef4444"/>
			<h2 className="text-2xl">
				No contacts found, click on{" "}
				<span
					onClick={() => navigate("/add")}
					className="underline cursor-pointer"
				>{" "}
					Add Contact
				</span>{" "}
				to create contact
			</h2>
		</div>
	);
};

export default NoContacts;
