import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

interface Object{
    id?:number,
    name?:string,
    email?:string,
    password?:string
}
interface State{
  value:Object[]
}



const initialState:State = {
  value:[]
}

export const addUserSlice = createSlice({
  name:"addUser",
initialState,
  reducers:{
    addUser:(state,action) => {
      state.value.push(action.payload)
    },
  }
})

export const { addUser} = addUserSlice.actions
export default addUserSlice.reducer