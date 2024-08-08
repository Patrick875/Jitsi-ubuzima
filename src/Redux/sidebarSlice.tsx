import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sidebarsize, sidedimension } from '../Types';


const initialState: sidebarsize = {
  size: sidedimension.large,
};

const sideBarSizeSlice = createSlice({
  name: 'sidebarsize',
  initialState,
  reducers: {
    changeSize: (state, action: PayloadAction<sidedimension>) => {
      state.size = action.payload;
    },
  },
});

export const { changeSize } = sideBarSizeSlice.actions;
export default sideBarSizeSlice.reducer;
