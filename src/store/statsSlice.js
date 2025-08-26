import { createSlice } from '@reduxjs/toolkit';
import { Defaultstats } from '../data/stats';
 const StatsSlice = createSlice({
  name: 'Stats',
  initialState:Defaultstats,
  reducers: {
    addStats: (state, action) => {
      return state;
      // state.stats = action.payload;
    },
  },
});
export const statsActions = StatsSlice.actions;
export  default StatsSlice;