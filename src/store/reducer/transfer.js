import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: '',
  amount: 0,
  id: null,
};

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setTransferDetails(state, action) {
      const { notes, amount, id } = action.payload;
      state.notes = notes;
      state.amount = amount;
      state.id = id;
    },
    resetTransferDetails(state) {
      state.notes = '';
      state.amount = 0;
      state.id = null;
    },
  },
});

export const { setTransferDetails, resetTransferDetails } =
  transferSlice.actions;
export default transferSlice.reducer;
