import { createSelector } from "@reduxjs/toolkit";

export const filteredUserCardsSelector = createSelector(
	(state) => state.users.users,
	(users) => users?.find(user => user.id == 0)
);