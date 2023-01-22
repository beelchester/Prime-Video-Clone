import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wl = JSON.parse(localStorage.getItem('watchlist')|| '[]')

interface WatchlistState {
  value: any;
}

const initialState: WatchlistState = {
  value: wl,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
      localStorage.setItem('watchlist', JSON.stringify(state.value))
    }
  }
});

export const { setWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;