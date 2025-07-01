import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/types";
import { profileReducer } from "@/store/profile/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
