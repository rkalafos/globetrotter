import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {CreateRacePayload, JoinResponse, Player, Race} from '../types/dto';
import {JoinFormValues} from "../pages/Join";

const apiUrl = process.env.NODE_ENV === 'production' ? 'https://1w9c0npqna.execute-api.us-east-1.amazonaws.com/prod' : 'http://localhost:8081';

// Define a service using a base URL and expected endpoints
export const globetrotterApi = createApi({
  reducerPath: 'globetrotterApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
      getRace: builder.query<Race, string>({
          query: (id) => `/races/${id}`
      }),
      joinRace: builder.mutation<JoinResponse, JoinFormValues>({
          query: (player) => ({ 
              url: `/races`,
              method: 'PUT',
              body: player
            })
      }),
      createRace: builder.mutation<undefined, CreateRacePayload>({
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