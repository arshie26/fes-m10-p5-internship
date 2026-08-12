import { configureStore } from '@reduxjs/toolkit'
import foryouSlice from './features/foryouSlice'
import viewModalSlice from './features/viewModalSlice'
import userSlice from './features/userSlice'

export const store = configureStore({
    reducer: {
        foryou: foryouSlice,
        viewModal: viewModalSlice,
        user: userSlice,
    },
})
