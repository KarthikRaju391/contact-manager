import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export interface ContactState {
	id: number;
	firstName: string;
	lastName: string;
	status: Status;
}

export enum Status {
	active = "active",
	inactive = "inactive",
}

interface Contacts {
	contacts: ContactState[];
}

const initialState: Contacts = {
	contacts: [
		{
			id: 1,
			firstName: "Karthik",
			lastName: "Raju",
			status: Status.active,
		},
		{
			id: 2,
			firstName: "Soni",
			lastName: "Sharan",
			status: Status.active,
		},
		{
			id: 3,
			firstName: "Pratham",
			lastName: "Baliga",
			status: Status.inactive,
		},
		{
			id: 4,
			firstName: "Aditi",
			lastName: "MR",
			status: Status.inactive,
		},
		{
			id: 5,
			firstName: "Nishanth",
			lastName: "Sathish",
			status: Status.active,
		},
		{
			id: 6,
			firstName: "Vidya",
			lastName: "Vishwanathan",
			status: Status.active,
		},
	],
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		added(state, action: PayloadAction<ContactState>) {
			state.contacts.push({
				id: action.payload.id,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				status: action.payload.status,
			});
		},

		updated(state, action: PayloadAction<ContactState>) {
			const oldContact = state.contacts.find(
				(contact) => contact.id === action.payload.id
			);

			const { firstName, lastName, status } = action.payload;

			if (oldContact) {
				(oldContact.firstName = firstName),
					(oldContact.lastName = lastName),
					(oldContact.status = status);
			}
		},
		removed(state, action: PayloadAction<number>) {
			console.log(action.payload);
			const newContacts = state.contacts.filter(
				(contact) => contact.id !== action.payload
			);
			state.contacts = newContacts;
		},
	},
});

export const { added, updated, removed } = contactSlice.actions;
export default contactSlice.reducer;
