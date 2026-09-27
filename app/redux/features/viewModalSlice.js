import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewModal: false,
    error: false,
    email: "",
    password: "",
    registrationToggle: false,
    resetToggle: false,
    nextPage: "",
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
        displayError: (state) => {
            state.error = true
        },
        resolveError: (state) => {
            state.error = false
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setNextPage: (state, action) => {
            state.nextPage = action.payload
        },
        toggleReg: (state) => {
            state.registrationToggle = true
        },
        toggleLogin: (state) => {
            state.registrationToggle = false
        },
        showReset: (state) => {
            state.resetToggle = true
        },
        hideReset: (state) => {
            state.resetToggle = false
        },
    },
})

export const { activate, deactivate, displayError, resolveError, setEmail, setPassword, toggleLogin, toggleReg, showReset, hideReset, setNextPage } = viewModalSlice.actions

export default viewModalSlice.reducer