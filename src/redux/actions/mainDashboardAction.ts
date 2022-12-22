import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { setItems } from 'redux/slice/mainDashboardSlice';
import api from 'services/api';

export const getAccessToken = createAsyncThunk('data/fetchData', async (arg: any, thunkAPI) => {
  try {
    const response = await api.getAccessToken({});
    return response.data;
  } catch (error: Error | AxiosError | any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

