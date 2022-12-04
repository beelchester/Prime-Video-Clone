import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

const current = localStorage.getItem('currentUser') !== null? JSON.parse(localStorage.getItem('currentUser')):{}


interface State{
  value:{id?:number,
  name?:string,
  email?:string,
  password?:number}
}



const initialState:State = {
  value:current
}

export const currentUserSlice = createSlice({
  name:"currentUser",
initialState,
  reducers:{
    currentUser:(state,action:PayloadAction<any>) => {
      state.value = action.payload
      localStorage.setItem('currentUser', JSON.stringify(state.value))
    },
  }
})

export const { currentUser} = currentUserSlice.actions
export default currentUserSlice.reducer