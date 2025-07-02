"use server";

export const postCommentAction = async (
  formData: FormData,
): Promise<boolean> => {
  console.log(formData);
  return true;
};
