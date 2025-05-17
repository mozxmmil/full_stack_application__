import axios from "axios";

export const signupAxiso = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
