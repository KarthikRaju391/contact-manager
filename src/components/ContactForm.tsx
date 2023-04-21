import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import {
	added,
	updated,
	toggledActiveState,
	removed,
} from "../features/contact/contactSlice";
import { Status as StatusType } from "../features/contact/contactSlice";

const ContactForm = () => {
	const dispatch = useAppDispatch();
	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		status: StatusType.active,
	});

	const isStatusSelected = (value: StatusType): boolean =>
		contact.status === value;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(added(contact));
	};

	return (
		<div>
			<h1>Create Contact</h1>
			<form onSubmit={handleSubmit}>
				<section>
					<div>
						<label htmlFor="first-name">First Name</label>
						<input
							type="text"
							name="firstName"
							id="first-name"
							value={contact.firstName}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="last-name">Last Name</label>
						<input
							type="text"
							name="lastName"
							id="last-name"
							value={contact.lastName}
							onChange={handleChange}
						/>
					</div>
				</section>
				<section>
					<label htmlFor="status">Status</label>
					<div>
						<div>
							<input
								type="radio"
								id="active"
								name="status"
								value="active"
								checked={isStatusSelected(StatusType.active)}
								onChange={handleChange}
							/>
							<label htmlFor="active">Active</label>
						</div>
						<div>
							<input
								type="radio"
								id="inactive"
								name="status"
								value="inactive"
								checked={isStatusSelected(StatusType.inactive)}
								onChange={handleChange}
							/>
							<label htmlFor="inactive">Inactive</label>
						</div>
					</div>
				</section>
				<input type="submit" value="Save Contact" />
			</form>
		</div>
	);
};

export default ContactForm;
