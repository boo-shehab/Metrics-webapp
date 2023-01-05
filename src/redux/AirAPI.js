/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAirPollution = createAsyncThunk('AirPollution/fetchMissions', async ({ lat, lon, index }, { rejectWithValue }) => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=b0ac3780a5e8e63dac4f5d6be5d347a4`).then((response) => response.json());
    return { data, index };
  } catch (err) {
    return rejectWithValue(err.respons.data);
  }
});

const AirSlice = createSlice({
  name: 'AirPollution',
  initialState: {
    loading: false,
    error: null,
    AirPollutions: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAirPollution.pending]: (state) => {
      state.loading = true;
    },
    [fetchAirPollution.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.AirPollutions[payload.index] = payload.data;
      state.error = null;
    },
    [fetchAirPollution.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

  },
});

export default AirSlice.reducer;
