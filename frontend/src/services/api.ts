import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Player, Race } from '../types/dto';

const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.todo.com' : 'http://localhost:8000';

// Define a service using a base URL and expected endpoints
export const globetrotterApi = createApi({
  reducerPath: 'globetrotterApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
      getRace: builder.query<Race, string>({
          query: (id) => `/races/${id}`
      }),
      joinRace: builder.mutation<undefined, Player>({
          query: (player) => ({ 
              url: `/races`,
              method: 'PUT',
              body: player
            })
      }),
      createRace: builder.mutation<undefined, Race>({
          query: (race) => ({
              url: '/races',
              method: 'POST',
              body: race
          })
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRaceQuery, useCreateRaceMutation, useJoinRaceMutation } = globetrotterApi;