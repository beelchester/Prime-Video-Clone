import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

const signInState = JSON.parse(localStorage.getItem('signedIn')|| 'false')


interface State{
  value:boolean
}


const initialState:State = {
  value:signInState
}

export const signedInSlice = createSlice({
  name:"signedIn",
initialState,
  reducers:{
    signedIn:(state,action) => {
      state.value = action.payload
      localStorage.setItem('signedIn', JSON.stringify(state.value))
    },
  }
})

export const { signedIn} = signedInSlice.actions
export default signedInSlice.reducer