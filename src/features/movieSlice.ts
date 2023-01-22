import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

interface MovieState{
  value: {
  id?:number,
    backdrop_path?:string,
  original_title?:string,
  original_name?:string,  
  overview?:string,
  original_language?:string,
  release_date?:string,
  first_air_date?:string,
  }
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