import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { added, updated } from "../features/contact/contactSlice";
import { Status as StatusType } from "../features/contact/contactSlice";
import { useLocation, useNavigate } from "react-router";

const ContactForm = () => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contact.contacts);
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname.split("/")[1];

	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		status: StatusType.active,
	});

	useEffect(() => {
		if (path === "edit") {
			const contactId = Number(location.pathname.split("/")[2]);
			const oldContact = contacts.find((contact) => contact.id === contactId);
			oldContact &&
				setContact({
					firstName: oldContact.firstName,
					lastName: oldContact.lastName,
					status: oldContact.status,
				});
		}
	}, [contacts, location, path]);

	const isStatusSelected = (value: StatusType): boolean =>
		contact.status === value;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (path === "edit") {
			const contactData = {
				id: Number(location.pathname.split("/")[2]),
				...contact,
			};
			dispatch(updated(contactData));
		} else if (path === "add") {
			const contactData = {
				id: contacts.length === 0 ? 1 : contacts.length + 1,
				...contact,
			};
			dispatch(added(contactData));
		}
		navigate("/");
	};

	return (
		<div className="w-3/4 mt-14 mx-auto">
			<h1 className="text-5xl font-bold">
				{path === "add"
					? "Create Contact"
					: path === "edit"
					? "Edit Contact"
					: null}
			</h1>
			<form onSubmit={handleSubmit} className="mt-6 w-3/4 px-4">
				<section className="flex flex-col gap-4 w-3/4 mx-auto">
					<div className="flex justify-evenly items-center">
						<label className="text-2xl w-1/2 font-semibold" htmlFor="first-name">
							First Name
						</label>
						<input
							type="text"
							name="firstName"
							id="first-name"
							value={contact.firstName}
							onChange={handleChange}
							className="border w-full border-slate-800 rounded-md outline-none px-3 py-2"
						/>
					</div>
					<div className="flex justify-evenly items-center">
						<label className="text-2xl w-1/2 font-semibold" htmlFor="last-name">
							Last Name
						</label>
						<input
							type="text"
							name="lastName"
							id="last-name"
							value={contact.lastName}
							onChange={handleChange}
							className="border w-full border-slate-800 rounded-md outline-none px-3 py-2"
						/>
					</div>
				</section>
				<section className="mt-8 flex justify-evenly w-1/2 mx-auto items-center">
					<label className="text-2xl font-semibold" htmlFor="status">
						Status
					</label>
					<div className="flex flex-col">
						<div className="flex gap-2">
							<input
								type="radio"
								id="active"
								name="status"
								value="active"
								checked={isStatusSelected(StatusType.active)}
								onChange={handleChange}
							/>
							<label className="text-lg cursor-pointer" htmlFor="active">Active</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								id="inactive"
								name="status"
								value="inactive"
								checked={isStatusSelected(StatusType.inactive)}
								onChange={handleChange}
							/>
							<label className="text-lg cursor-pointer" htmlFor="inactive">Inactive</label>
						</div>
					</div>
				</section>
				<div className="w-1/3 mt-10 bg-slate-800 text-slate-200 mx-auto flex justify-center py-4 rounded-md cursor-pointer">
					<input
						type="submit"
						className="cursor-pointer text-lg"
						value={
							path === "edit"
								? "Update Contact"
								: path === "add"
								? "Save Contact"
								: undefined
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
