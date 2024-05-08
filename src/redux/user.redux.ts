import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./reducer";




const getProfile = createAsyncThunk(
  "user/me",
  async (data: undefined, { rejectWithValue, getState }) => {
    try {
      console.log("Action get profile")
      // const res = await userApi.getProfile();
      // return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);


export interface UserState {
  
}

export const initialState: UserState = {
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  

    builder
      .addCase(getProfile.pending, (state) => {
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
      })
      .addCase(getProfile.rejected, (state, { error }) => {
      });

   
  },
});

export const userReducer = userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
export const userActions = {
  getProfile,
};
