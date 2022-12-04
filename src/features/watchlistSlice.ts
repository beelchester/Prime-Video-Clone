import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

// const current = localStorage.getItem('currentUser') !== null? JSON.parse(localStorage.getItem('currentUser')):{}


// interface State{
//   value:{id?:number,
//   name?:string,
//   email?:string,
//   password?:number}
// }



const initialState = {
  value:[{currentid:'',movie:{}}]
}

export const watchlistSlice = createSlice({
  name:"watchlist",
initialState,
  reducers:{
    addwatchlist:(state,action) => {
      state.value=action.payload
      // localStorage.setItem('watchlist', JSON.stringify(state.value))
    },
  }
})

export const { addwatchlist} = watchlistSlice.actions
export default watchlistSlice.reducer