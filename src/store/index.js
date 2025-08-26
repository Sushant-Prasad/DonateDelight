import { configureStore} from '@reduxjs/toolkit';
import NgoSlice from './ngoSlice';
import StatsSlice from './statsSlice';


 const ngoStore = configureStore({
  reducer: {
    NGOs: NgoSlice.reducer,
    Stats : StatsSlice.reducer
  },
 })
 export default ngoStore;
