import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
  },
  reducers: {
    getProfile(state, actions) {
      return {
        ...state,
        profile: actions.payload,
      };
    },
    // logout(state, actions) {
    //   return {
    //     ...state,
    //     isAuth: false,
    //     token: "",
    //   };
    // },
  },
});

export const { getProfile } = profileSlice.actions;
export default profileSlice.reducer;
