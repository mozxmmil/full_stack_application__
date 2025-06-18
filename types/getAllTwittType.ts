export type TwittType = {
    __typename?: "Twitt" | undefined;
    id?: string | null | undefined; // Already allows null
    twitt?: string | undefined;
    image?: string | null | undefined; // Allow null
    updatedAt?: string | undefined;
    createdAt?: string | undefined;
    userId?: {
      __typename?: "User" | undefined; // Align with input type
      id?: string | undefined;
      image?: string | null | undefined; // Allow null
      name?: string | undefined;
    };
    handleFollow?: () => void;
    handleUnfollow?: () => void;
  };

