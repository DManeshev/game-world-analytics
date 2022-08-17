import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGame } from '../../models/models';

interface rawgState {
    playedGames: IGame[];
    IDArr: number[];
}

const initialState: rawgState = {
    playedGames: [],
    IDArr: [],
}

const rawgSlice = createSlice({
    name: 'rawg',
    initialState,
    reducers: {
        addPlayedGame(state, action: PayloadAction<IGame>) {
            state.playedGames.push(action.payload);

            state.IDArr.push(action.payload.id);
        },
        deletePlayedGame(state, action: PayloadAction<number>) {
            state.playedGames = state.playedGames.filter(game => game.id !== action.payload)

            state.IDArr = state.IDArr.filter(id => id !== action.payload)
        },
    }
})

export const { addPlayedGame, deletePlayedGame } = rawgSlice.actions;
export default rawgSlice.reducer;