import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  index: 0,
  //   abjad: '',
};

// fungsi satu
const slice = createSlice({
  name: 'anjing',
  initialState,
  reducers: {
    tambah: state => {
      state.index += 1;
    },
    kurang: state => {
      state.index -= 1;
    },
    ngasal: state => {
      state.index = 10;
    },
    // objek: (state,actions) => {
    //   state.index = actions.payload.index;
    // },
    objek: (state, action) => {
      const incrementAmount = action.payload;
      //   state.darkModes = "dark";
      state.index = incrementAmount;
    },
  },
});

// fungsi dua

// export const {kurang, tambah, berubah} = slice.actions;
export const {tambah, kurang, ngasal, objek} = slice.actions;

export default slice.reducer;
