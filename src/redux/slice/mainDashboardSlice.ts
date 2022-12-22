import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getAccessToken } from 'redux/actions/mainDashboardAction';
import api from 'services/api';

interface DataState {
  data: any[];
  loading: boolean;
  error: string | null | boolean;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

const mainDashboardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
  },
});

export const { setLoading, setItems, setError } = mainDashboardSlice.actions;

export default mainDashboardSlice.reducer;
