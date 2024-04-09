import { VoidResponse } from "./common";

export type SignupRequest = {
  body: SignupBody;
};

export type SignupBody = {
  email: string;
  username: string;
  password: string;
};

export type SignupResponse = VoidResponse;
