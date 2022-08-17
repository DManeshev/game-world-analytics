import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGame, ServerResponse } from '../../models/models';

// const token = '65c56c1d15aa496ca350aa9f3c7c407a';

export const rawgApi = createApi({
    reducerPath: 'rawg/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.rawg.io/api/',
    }),
    endpoints: build => ({
        getGames: build.query<IGame[], void>({
            query: () => ({
                url: `games?key=65c56c1d15aa496ca350aa9f3c7c407a&dates=2020-01-01,2022-12-30`,
            }),
            transformResponse: (response: ServerResponse<IGame>) => response.results
        }),
        getGame: build.query<IGame, number | null>({
            query: (id: number) => ({
                url: `games/${id}?key=65c56c1d15aa496ca350aa9f3c7c407a`
            })
        })
    })
})

export const { useGetGamesQuery, useGetGameQuery } = rawgApi;
