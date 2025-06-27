import { configureStore } from "@reduxjs/toolkit";
import reducer from "../components/PaymentForm/cardsSlice";

const store = configureStore({
	reducer: reducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;