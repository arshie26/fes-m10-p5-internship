import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: {},
    recommended: [],
  suggested: []
}

export const foryouSlice = createSlice({
  name: 'foryou',
  initialState,
  reducers: {
    addSelected: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selected = action.payload
    },
    addRecommended: (state, action) => {
      state.recommended = action.payload
    },
    addSuggested: (state, action) => {
      state.suggested = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSelected, addRecommended, addSuggested } = foryouSlice.actions

export default foryouSlice.reducer