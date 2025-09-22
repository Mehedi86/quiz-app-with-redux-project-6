import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizeApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api"
    }),
    tagTypes: ["quiz"],
    endpoints: (builder) => ({
        addQuiz: builder.mutation({
            query: (body) => ({
                url: "/quizzes",
                method: "POST",
                body
            }),
            invalidatesTags: ["quiz"]
        }),

        getAllQuizs: builder.query({
            query: () => "/quizzes",
            providesTags: ["quiz"]
        })
    })
})

export const { useAddQuizMutation, useGetAllQuizsQuery } = quizeApi