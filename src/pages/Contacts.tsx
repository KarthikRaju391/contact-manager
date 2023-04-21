import { useAppSelector, useAppDispatch } from "../app/hooks";
import NoContacts from "../components/NoContacts";
import Contact from "../components/Contact";
import AddContactButton from "../components/AddContactButton";

const Contacts = () => {
	const contacts = useAppSelector((state) => state.contact.contacts);

	return (
		<div className="flex flex-col items-start mt-14 w-3/4 mx-auto">
			<div className=" w-full flex justify-between items-center">
				<h1 className="text-5xl font-bold">Contacts</h1>
				<AddContactButton />
			</div>
			{!contacts || (contacts.length === 0 && <NoContacts />)}
			<ul className="w-full grid grid-cols-2 mt-4 gap-x-4">
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</ul>
		</div>
	);
};

export default Contacts;
