import { createSelector } from "@reduxjs/toolkit";
import { auth } from '../../config/';

export const filteredUserCardsSelector = createSelector(
	(state) => state.users.users,
	(users) => users?.find(user => user.id == 0)
);