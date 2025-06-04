import { Method } from "../enums";

export type ClientFetcherArgs = {
  endpoint: string;
  data?: object | null;
  method?: Method;
  config?: object;
};
