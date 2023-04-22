import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
	reducer: { contact: contactReducer },
});

// getting the type of the store dispatch function
export type AppDispatch = typeof store.dispatch;

// using typescript's inference to get the reducer types automatically
export type RootState = ReturnType<typeof store.getState>;
