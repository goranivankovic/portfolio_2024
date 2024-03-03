import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bgColor: '#1d1b1b',
  textColor:"#f5f5f5",
  particleColor:"#80b3ff",
  headlineColor:"#f0ad4e",
  laz: true


    
}

export const changeBgColor = createSlice({
  name: 'color',
  initialState,
  reducers: {
    whiteBgColor: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1


        state.bgColor='whitesmoke'
        state.textColor="#1d1b1b"
        state.particleColor="#1d1b1b"
        state.headlineColor="#f0ad4e"
        state.laz=false
  
    },
       blackBgColor: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes



        state.bgColor= '#1d1b1b'
        state.textColor="#f5f5f5"
        state.particleColor="#80b3ff"
        state.headlineColor="#f0ad4e"
         state.laz=true
  
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { whiteBgColor ,blackBgColor } = changeBgColor.actions

export default changeBgColor.reducer