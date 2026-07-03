import { prisma } from "database";

export interface UserCreateProps {
  email?: string;
  first_name?: string;
  last_name?: string;
  profile_image_url?: string;
  user_id: string;
}

export const userCreate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: UserCreateProps) => {
  const userAttributes = {
    email,
    first_name,
    last_name,
    profile_image_url,
  };

  try {
    const existingUser = await prisma.users.findUnique({
      where: { user_id }
    });

    if (existingUser) {
      return await prisma.users.update({
        where: { user_id },
        data: {
          attributes: userAttributes,
          updatedAt: new Date()
        }
      });
    } else {
      return await prisma.users.create({
        data: {
          user_id,
          attributes: userAttributes,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const userUpdate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: UserCreateProps) => {
  return userCreate({ email, first_name, last_name, profile_image_url, user_id });
};
