import { DefaultSession, DefaultUser, DefaultJWT  } from "next-auth";


declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    email?: string;
    name?: string;
  }

  interface Account {
    accessToken: string;
    refreshToken: string;
    idToken?: string;
    provider: string;
    type: string;
  }

  interface JWT extends DefaultJWT {
    id: string; // Ensure id is string
    email?: string | null | undefined;
    name?: string | null | undefined;
    emailVerified?: Date | null;
    accessToken?: string;
    refreshToken?: string;
    age: number;
  }

  interface Session {
    accessToken?: string;
    refreshToken?: string;

    user: {
      id: string;
      email?: string | null | undefined;
      name?: string | null | undefined;
      image?: string | null | undefined;
      emailVerified?: boolean | null;
    } & DefaultSession["user"];
  }
}
