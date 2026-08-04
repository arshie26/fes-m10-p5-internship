import { configureStore } from '@reduxjs/toolkit'
import foryouSlice from './foryouSlice'

export const store = configureStore({
    reducer: {
        foryou: foryouSlice
    },
})
