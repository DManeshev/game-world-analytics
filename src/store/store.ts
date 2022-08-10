import { configureStore } from "@reduxjs/toolkit";
import { rawgApi } from "./rawg/rawg.api";

const store = configureStore({
    reducer: {
        [rawgApi.reducerPath]: rawgApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rawgApi.middleware)
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;