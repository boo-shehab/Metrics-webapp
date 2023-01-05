import { configureStore } from '@reduxjs/toolkit';
import AirSlice from './AirAPI';

const Store = configureStore({
  reducer: {
    AirAPI: AirSlice,
  },
});

export default Store;
