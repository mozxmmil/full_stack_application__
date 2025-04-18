import { prismaClient } from "@/utils/dbConnect";

export const getTodoHandler = async (
  parent: undefined,
  { id }: { id: number },
) => {
  const todo = await prismaClient.todo.findUnique({
    where: {
      id,
    },
  });
  return todo;
};

type Todo = {
  title: string;
  description: string;
};
export const createTodoHandler = async (
  parent: undefined,
  { title, description }: Todo,
) => {
  const todo = await prismaClient.todo.create({
    data: {
      title,
      description,
    },
  });

  return todo;
};

export const getImagehandler = (parent: any) => {
  console.log(parent);
  return {
    url: "https://picsum.photos/200/300",
  };
};
