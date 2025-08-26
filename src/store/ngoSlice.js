import { createSlice } from '@reduxjs/toolkit';
import { DefaultNGOs } from '../data/NGO';
const NgoSlice = createSlice({
  name: 'NGOs',
  initialState:DefaultNGOs,
  reducers: {
    addNgo: (state, action) => {
      return state;
      // state.ngo = action.payload;
    },
  },
});
export const ngoActions = NgoSlice.actions;
export default NgoSlice;



