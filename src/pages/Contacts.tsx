import { useAppSelector } from "../app/hooks";
import NoContacts from "../components/NoContacts";
import Contact from "../components/Contact";
import AddContactButton from "../components/AddContactButton";
import { PlusCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

const Contacts = ({ screenSize }: { screenSize: string }) => {
	const contacts = useAppSelector((state) => state.contact.contacts);
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-start mt-14 w-3/4 mx-auto">
			<div className=" w-full flex justify-between items-center">
				<h1 className="text-4xl md:text-5xl font-bold">Contacts</h1>
				{screenSize === "small" ? (
					<PlusCircle size={35} onClick={() => navigate("/add")} />
				) : (
					<AddContactButton />
				)}
			</div>
			{!contacts || (contacts.length === 0 && <NoContacts />)}
			<ul className="w-full grid lg:grid-cols-2 mt-4 md:gap-x-4 gap-y-2">
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</ul>
		</div>
	);
};

export default Contacts;
