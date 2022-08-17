import { configureStore } from "@reduxjs/toolkit";
import { rawgApi } from "./rawg/rawg.api";
import rawgReducer from './rawg/rawg.slice'

const store = configureStore({
    reducer: {
        [rawgApi.reducerPath]: rawgApi.reducer,
        rawg: rawgReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rawgApi.middleware)
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;