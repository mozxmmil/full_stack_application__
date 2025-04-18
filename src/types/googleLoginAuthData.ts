type GoogleLoginToken = {
  sub?: string;
  email: string;
  name: string;
  image: string;
  id: string;
};

type GoogleLoginUser = GoogleLoginToken & {
  id: string;
};

export interface GoogleLoginAuthData {
  token: GoogleLoginToken;
  user: GoogleLoginUser;
  session: {
    expires: string;
    user: GoogleLoginUser;
  };
}
