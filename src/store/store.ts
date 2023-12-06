import { configureStore } from '@reduxjs/toolkit';
import swapSliceReducer from './swapSlice';
import bridgeSlice from './bridgeSlice';

export const store = configureStore({
    reducer:{
        bridge: bridgeSlice,
        swap: swapSliceReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch