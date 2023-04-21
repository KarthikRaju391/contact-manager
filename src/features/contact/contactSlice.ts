import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ContactState {
	firstName: string;
	lastName: string;
	status: Status;
}

export enum Status {
	active = "active",
	inactive = "inactive",
}

const initialState: ContactState = {
	firstName: "",
	lastName: "",
	status: Status.active,
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		added(state, action: PayloadAction<ContactState>) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.status = action.payload.status;
		},
		toggledActiveState(state, action: PayloadAction<Status>) {
			state.status = action.payload;
		},
		updated(state, action: PayloadAction<ContactState>) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.status = action.payload.status;
		},
		removed(state) {
			state.firstName = "";
			state.lastName = "";
			state.status = Status.active;
		},
	},
});

export const { added, updated, toggledActiveState, removed } =
	contactSlice.actions;
export default contactSlice.reducer;
