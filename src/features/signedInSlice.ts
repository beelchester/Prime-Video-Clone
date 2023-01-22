import {createSlice, PayloadAction}  from "@reduxjs/toolkit"
import { isAuthenticated } from "../API/auth"

// const signInState = JSON.parse(localStorage.getItem('signedIn')|| 'false')
const signInState = isAuthenticated()

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