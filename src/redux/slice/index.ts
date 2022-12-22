import { combineReducers } from 'redux';
import mainDashboardSlice from './mainDashboardSlice';

const rootReducer = combineReducers({
  data: mainDashboardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
