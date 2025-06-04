export interface UserState {
  userData: User;
}

export interface User {
  phoneNumber: string;
  phoneCode: string;
  redirect?: string;
  remainingTime?: number;
}
