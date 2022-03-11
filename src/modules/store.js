import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../Modules/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});
