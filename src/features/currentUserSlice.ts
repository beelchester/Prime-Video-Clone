import {createSlice, PayloadAction}  from "@reduxjs/toolkit"


interface State{
  value:{id?:number,
  name?:string,
  email?:string,
  password?:number}
}



const initialState:State = {
  value:{}
}

export const currentUserSlice = createSlice({
  name:"currentUser",
initialState,
  reducers:{
    currentUser:(state,action:PayloadAction<any>) => {
      state.value = action.payload
    },
  }
})

export const { currentUser} = currentUserSlice.actions
export default currentUserSlice.reducer