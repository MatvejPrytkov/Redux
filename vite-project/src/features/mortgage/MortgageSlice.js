import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 S: 2_567_000,
 P:15,
 N: 240
}

export const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState,
  reducers: {
    setS: (state, action) => {
      
      state.S = action.payload
    },
    setP: (state, action) => {
      
        state.P = action.payload
      },
      setN: (state, action) => {
      
        state.N = action.payload
      },
    
  },
})

// Action creators are generated for each case reducer function
export const { setS, setP, setN } = mortgageSlice.actions

export default mortgageSlice.reducer