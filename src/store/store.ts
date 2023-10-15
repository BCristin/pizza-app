import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import cartSlice, { CART_PERSISTENT_STATE } from './cart.slice';
=======
import cartSlice from './cart.slice';
>>>>>>> 4a2ba8525900911270320dfa6054ef07332ea6c1
import { saveState } from './storage';
import userSlice, { JWT_PERSISTENT_STATE } from './user.slice';

export const store = configureStore({
	reducer: { user: userSlice, cart: cartSlice },
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
	saveState(store.getState().cart, CART_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
