import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

const users = JSON.parse(localStorage.getItem('userlist')|| '[]')

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
  value:users
}

export const addUserSlice = createSlice({
  name:"addUser",
initialState,
  reducers:{
    addUser:(state,action) => {
      state.value.push(action.payload)
      localStorage.setItem('userList', JSON.stringify(state.value.map(item=>item)))
    },
  }
})

export const { addUser} = addUserSlice.actions
export default addUserSlice.reducer