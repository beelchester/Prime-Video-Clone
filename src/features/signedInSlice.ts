import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

interface State{
  value:boolean
}


const initialState:State = {
  value:false
}

export const signedInSlice = createSlice({
  name:"signedIn",
initialState,
  reducers:{
    signedIn:(state,action) => {
      state.value = action.payload
    },
  }
})

export const { signedIn} = signedInSlice.actions
export default signedInSlice.reducer