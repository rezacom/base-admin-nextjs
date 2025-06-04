import { createReducer } from "@reduxjs/toolkit";
import { getProfile } from "./actions";
import * as T from "@/common/types";

const initProfiletData = {
  profileData: {
    data: null as T.ProfileResponse | null,
    loading: false,
    error: null as null | object,
  },
};
export const profileReducer = createReducer(initProfiletData, (builder) => {
  builder.addCase(getProfile.pending, (state) => {
    state.profileData.loading = true;
  });
  builder.addCase(getProfile.fulfilled, (state, action) => {
    state.profileData.data = action.payload;
  });
  builder.addCase(getProfile.rejected, (state, action) => {
    state.profileData.error = action.payload as object;
  });
});
