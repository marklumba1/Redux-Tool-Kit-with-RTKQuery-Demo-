import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: `api`,
    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com/`}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => `/posts`
        }),
        getUsers: builder.query({
            query: () => `/users`
        })
    })   
})

//auto generated hook from endpoints
export const {useGetPostsQuery, useGetUsersQuery} = apiSlice 