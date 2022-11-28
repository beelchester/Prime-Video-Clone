import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

interface MovieState{
  value: {backdrop_path?:string}
}

const initialState:MovieState = {
  value:{backdrop_path:""}
}

export const movieSlice = createSlice({
  name:"movie",
initialState,
  reducers:{
    setMovie:(state,action:PayloadAction<any>) => {
      state.value = action.payload
    },
  }
})

export const { setMovie} = movieSlice.actions
export default movieSlice.reducer