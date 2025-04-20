import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  if (!password) throw new Error("password is required");
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
