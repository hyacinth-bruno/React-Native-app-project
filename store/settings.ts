import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  sms: boolean;
  push: boolean;
  email: boolean;
}

const initialState: SettingsState = {
  sms: false,
  push: false,
  email: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSms(state, action: PayloadAction<boolean>) {
      state.sms = action.payload;
    },
    setPush(state, action: PayloadAction<boolean>) {
      state.push = action.payload;
    },
    setEmail(state, action: PayloadAction<boolean>) {
      state.email = action.payload;
    },
  },
});

export const { setSms, setPush, setEmail } = settingsSlice.actions;

export default settingsSlice.reducer;
