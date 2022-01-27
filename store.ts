import { configureStore } from '@reduxjs/toolkit'
import pagesReducer from './reducers/pages'

export const store = configureStore({
    reducer: {
        pages: pagesReducer,
    },
})