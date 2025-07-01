import { configureStore } from "@reduxjs/toolkit";
import cards from './slices/cardsSlice'
import users from "./slices/userSlice";
import user from './slices/useSlice';

const store = configureStore({
	reducer: { cards, users, user },
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;