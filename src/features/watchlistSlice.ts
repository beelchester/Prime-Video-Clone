import {createSlice, PayloadAction}  from "@reduxjs/toolkit"

// const current = localStorage.getItem('currentUser') !== null? JSON.parse(localStorage.getItem('currentUser')):{}


// interface State{
//   value:{id?:number,
//   name?:string,
//   email?:string,
//   password?:number}
// }



const initialState = {
  value:[{currentid:'',movie:[{}]}]
}

export const watchlistSlice = createSlice({
  name:"watchlist",
initialState,
  reducers:{
    addwatchlist:(state,action) => {
      //  state.value.currentid===''?state.value=action.payload:state.value.movie.push(action.payload.movie[0])
      // let idExist = true
      state.value.map((item, index)=>item.currentid===action.payload.currentid?item.movie.push(action.payload.movie[0]):null)
      // state.value.map((item, index)=>item.currentid===action.payload.currentid&&item.movie.push('hi'))
      const exist = i => i.currentid===action.payload.currentid
      !state.value.some(exist)&&state.value.push(action.payload)
      // !state.value.includes(action.payload.currentid)&&state.value.push(action.payload)
      // localStorage.setItem('watchlist', JSON.stringify(state.value))
    },
  }
})

export const { addwatchlist} = watchlistSlice.actions
export default watchlistSlice.reducer