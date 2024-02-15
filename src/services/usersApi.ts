import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {User} from "../types/user.types.ts";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
            providesTags: ['User'],
        }),
    }),
});

export const { useGetUsersQuery } = usersApi;

