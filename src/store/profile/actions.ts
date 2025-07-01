/* eslint-disable @typescript-eslint/no-explicit-any */
import clientFetcher from "@/common/helper/clientFetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as T from '@/common/types';

export const getProfile = createAsyncThunk("/profile", async () => {
  const response = await clientFetcher.get({
    endpoint: "/profile",
  });
  return response.data;
});
