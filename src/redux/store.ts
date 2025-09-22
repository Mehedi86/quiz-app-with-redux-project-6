import { configureStore } from '@reduxjs/toolkit'
import { quizSlice } from './features/quizSlice'
import { quizeApi } from './api/quizApi'

export const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer,
        [quizeApi.reducerPath]: quizeApi.reducer
    },
    middleware:(getDefaultMiddleWare)=>{
        return getDefaultMiddleWare().concat(quizeApi.middleware)
    } 
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store