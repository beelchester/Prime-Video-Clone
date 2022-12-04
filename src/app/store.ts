import {configureStore} from "@reduxjs/toolkit"
import addUserReducer from "../features/addUserSlice"
import currentUserReducer from "../features/currentUserSlice"
import movieReducer from "../features/movieSlice"
import signedInReducer from "../features/signedInSlice"
import watchlistReducer from "../features/watchlistSlice"
export const store = configureStore({
  reducer:{
    movie:movieReducer,
    addUser:addUserReducer,
    currentUser:currentUserReducer,
    signedIn:signedInReducer,
    watchlist:watchlistReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch