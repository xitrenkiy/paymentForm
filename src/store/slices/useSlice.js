import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	email: null,
	token: null
}

const useSlice = createSlice({
	name: 'use',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		removeUser: (state) => {
			state.id = null;
			state.email = null;
			state.token = null;
		}
	}
});

const { actions, reducer } = useSlice;

export const { setUser, removeUser } = actions;
export default reducer;