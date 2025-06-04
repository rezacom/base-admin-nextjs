import { Method } from "../enums";

export interface ClientFetcherArgs {
  endpoint: string;
  data?: object | null;
  method?: Method;
  config?: object;
}
