interface UserData {
  id: string;
  accessToken: string;
  refreshToken: string;
}

export interface signupDataResponceType {
 data:{
    statusCode: number;
    message: string;
    data: UserData;
    susscess: boolean;
 } // Note: "susscess" spelling galat hai, "success" honi chahiye
}

