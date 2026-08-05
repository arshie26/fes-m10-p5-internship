import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewModal: false
}

export const viewModalSlice = createSlice({
    name: 'viewModal',
    initialState,
    reducers: {
        activate: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log("Modal activated");
            state.viewModal = true
        },
        deactivate: (state) => {
            state.viewModal = false
        },
    },
})

export const { activate, deactivate } = viewModalSlice.actions

export default viewModalSlice.reducer