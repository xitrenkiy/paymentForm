import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
	users: [],
	usersLoadingStatus: 'idle'
}

export const fetchUsers = createAsyncThunk(
	'users/usersFetch',
	async () => {
		const { request } = useHttp();
		return await request('http://localhost:3000/users');
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducer: {
		addUser: (state, action) => {
			state.users.push(action.payload)
		},
		deleteUser: (state, action) => {
			state.users.filter(user => user.id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, state => { state.usersLoadingStatus = 'loading' })
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.usersLoadingStatus = 'idle';
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, state => { state.usersLoadingStatus = 'error' })
			.addDefaultCase(() => { })
	}
})

const { actions, reducer } = userSlice;

export const { addUser } = actions;
export default reducer;