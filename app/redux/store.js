import { configureStore } from '@reduxjs/toolkit'
import foryouSlice from './foryouSlice'
import viewModalSlice from './features/viewModalSlice'

export const store = configureStore({
    reducer: {
        foryou: foryouSlice,
        viewModal: viewModalSlice,
    },
})
