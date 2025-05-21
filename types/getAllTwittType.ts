export type TwittType = {
  id: string | null | undefined;
  twitt?: string;
  image?: string;
  updatedAt?: string;
  createdAt?: string;
  userId?: {
    id?: string;
    image?: string;
    name?: string;
  };
};
