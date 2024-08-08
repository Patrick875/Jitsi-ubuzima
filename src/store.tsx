import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Redux/authSlice';
import sidebarsizeReducer from './Redux/sidebarSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebarsize: sidebarsizeReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//state getters

export const getUser = (state: RootState) => state.auth.user;
export const getSideBarSize = (state: RootState) => state.sidebarsize.size;


