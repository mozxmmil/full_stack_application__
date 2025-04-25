import { AxiosError } from "axios";

// This type ensures the error has a message and optionally response with message
export type AxiosErrorWithMessage = AxiosError & {
  message: string;
  response?: {
    data?: {
      message?: string;
    };
  };
};
