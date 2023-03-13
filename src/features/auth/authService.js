import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendURL } from '../../api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    }
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: '/user/profile',
        method: 'GET'
      })
    })
  })
});

export const { useGetDetailsQuery } = authApi;
