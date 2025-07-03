import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	email: null,
	token: null,
	loading: true
}

const useSlice = createSlice({
	name: 'use',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.loading = action.payload.loading;
		},
		removeUser: (state) => {
			state.id = null;
			state.email = null;
			state.token = null;
			state.loading = false;
		},
		startLoading: (state) => {
			state.loading = true;
		}
	}
});

const { actions, reducer } = useSlice;

export const { setUser, removeUser, startLoading } = actions;
export default reducer;