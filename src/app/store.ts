import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
	reducer: { counter: counterReducer, contact: contactReducer },
});

// getting the type of the store dispatch function
export type AppDispatch = typeof store.dispatch;

// using typescript's inference to get the reducer types automatically
export type RootState = ReturnType<typeof store.getState>;
