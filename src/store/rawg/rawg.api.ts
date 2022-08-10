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
                url: `games?key=65c56c1d15aa496ca350aa9f3c7c407a`,
            }),
            transformResponse: (response: ServerResponse<IGame>) => response.results
        })
    })
})

export const { useGetGamesQuery } = rawgApi;
