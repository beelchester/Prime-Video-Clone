import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

const current = JSON.parse(localStorage.getItem('currentUser')|| '{}')

interface State{
  value:{id?:string,
  name?:string,
  email?:string,
  password?:number
  watchlist?:any
}
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