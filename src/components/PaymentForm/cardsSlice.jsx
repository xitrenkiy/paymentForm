import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
	cards: [],
	cardsLoadingStatus: 'idle'
}

export const fetchCards = createAsyncThunk(
	'cards/fetchCards',
	() => {
		const { request } = useHttp();
		return request('http://localhost:3000/cards')
	}
)

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		cardAdded: (state, action) => {
			state.cards.push(action.payload)
		},
		cardDeleted: (state, action) => {
			state.cards = state.cards.filter(card => card.id !== action.payload)
		},
		cardPrimaryToggle: (state, action) => {
			state.cards.forEach(card => card.primary = card.id === action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCards.pending, state => {state.cardsLoadingStatus = 'loading'})
			.addCase(fetchCards.fulfilled, (state, action) => {
				state.cardsLoadingStatus = 'idle';
				state.cards = action.payload;
			})
			.addCase(fetchCards.rejected, state => {state.cardsLoadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
});

const { actions, reducer } = cardsSlice;

export const { cardAdded, cardDeleted, cardPrimaryToggle } = actions;
export default reducer;