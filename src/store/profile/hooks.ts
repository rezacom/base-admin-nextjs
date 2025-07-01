import { useSelector } from "react-redux";
import { AppState } from "@/store/types";

export function useReduxWallet() {
  return useSelector<AppState, AppState["profile"]>((select) => select.profile);
}
