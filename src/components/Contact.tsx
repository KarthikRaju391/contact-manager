import { PencilSimple, Trash } from "@phosphor-icons/react";
import { ContactState, removed } from "../features/contact/contactSlice";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../app/hooks";

const Contact = ({ contact }: { contact: ContactState }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleEdit = (id: number) => {
		navigate(`/edit/${id}`);
	};

	const handleDelete = (id: number) => {
		dispatch(removed(id));
	};

	return (
		<li
			key={contact.id}
			className="group border flex flex-col rounded-md hover:bg-slate-100 py-4 px-2 items-center cursor-pointer"
		>
			<div className="w-3/4 flex items-center justify-between">
				<h2 className="text-xl md:text-2xl font-semibold">
					{contact.firstName} {contact.lastName}
				</h2>
				<span
					className={`${
						contact.status === "active" ? "bg-green-600" : "bg-red-600"
					} h-2 w-2 rounded-full group-hover:animate-pulse`}
				></span>
			</div>
			<div className="flex mt-4 w-3/4 justify-start gap-4">
				<PencilSimple
					size={28}
					className="hover:scale-110 duration-75"
					onClick={() => handleEdit(contact.id)}
				/>
				<Trash
					size={28}
					className="hover:scale-110 duration-75"
					onClick={() => handleDelete(contact.id)}
				/>
			</div>
		</li>
	);
};

export default Contact;
