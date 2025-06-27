import { configureStore } from "@reduxjs/toolkit";
import cards from "../components/PaymentForm/cardsSlice";
import users from "./slices/userSlice";

const store = configureStore({
	reducer: {cards, users},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;