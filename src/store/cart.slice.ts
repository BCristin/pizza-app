import { PayloadAction, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { loadState } from './storage';
export const CART_PERSISTENT_STATE = 'cartData';
=======
>>>>>>> 4a2ba8525900911270320dfa6054ef07332ea6c1

export interface CartItem {
	id: number;
	count: number;
}

export interface CartState {
	items: CartItem[];
}

<<<<<<< HEAD
const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
=======
const initialState: CartState = {
>>>>>>> 4a2ba8525900911270320dfa6054ef07332ea6c1
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
<<<<<<< HEAD
		delete: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((i) => i.id !== action.payload);
		},
		remove: (state, action: PayloadAction<number>) => {
			const existed = state.items.find((i) => i.id === action.payload);
			if (!existed) {
				return;
			}
			if (existed.count === 1) {
				state.items = state.items.filter((i) => i.id !== action.payload);
			} else {
				state.items.map((i) => {
					if (i.id === action.payload) {
						i.count -= 1;
					}
					return i;
				});
				return;
			}
		},
=======
>>>>>>> 4a2ba8525900911270320dfa6054ef07332ea6c1
		add: (state, action: PayloadAction<number>) => {
			const existed = state.items.find((i) => i.id === action.payload);
			if (!existed) {
				state.items.push({ id: action.payload, count: 1 });
<<<<<<< HEAD
				return;
			}
			state.items.map((i) => {
				if (i.id === action.payload) {
					i.count += 1;
				}
				return i;
			});
=======
			} else
				state.items.map((i) => {
					if (i.id === action.payload) {
						i.count += 1;
					}
					return i;
				});
>>>>>>> 4a2ba8525900911270320dfa6054ef07332ea6c1
		},
	},
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
