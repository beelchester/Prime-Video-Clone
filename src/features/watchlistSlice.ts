import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

const wl = JSON.parse(localStorage.getItem('watchlist')|| '[{"currentid":"","movie":[{}]}]')


// interface State{
//   value:{id?:number,
//   name?:string,
//   email?:string,
//   password?:number}
// }



const initialState = {
  value:wl
}

export const watchlistSlice = createSlice({
  name:"watchlist",
initialState,
  reducers:{
    addwatchlist:(state,action) => {
      state.value.map((item:{currentid:string,movie:any[]})=>item.currentid===action.payload.currentid?item.movie.push(action.payload.movie[0]):null)
      const exist = (i: {currentid:string}) => i.currentid===action.payload.currentid
      !state.value.some(exist)&&state.value.push(action.payload)
    
      localStorage.setItem('watchlist', JSON.stringify(state.value))
    },
    removewatchlist:(state,action) => {
      state.value.map((item:{currentid:string,movie:any[]})=>item.currentid===action.payload.currentid&&item.movie.splice(item.movie.indexOf(action.payload.movie[0]),1))}
  }
})

export const { addwatchlist, removewatchlist} = watchlistSlice.actions
export default watchlistSlice.reducer