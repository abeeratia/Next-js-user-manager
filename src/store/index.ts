import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from './slices/stepperSlice';
import paginationReducer from './slices/paginationSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    pagination: paginationReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
