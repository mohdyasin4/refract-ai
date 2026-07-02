"server only";
import { userUpdateProps } from "@/utils/types";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const userUpdate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: userUpdateProps) => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  try {
    const userAttributes = {
      email,
      first_name,
      last_name,
      profile_image_url,
    };

    const { data, error } = await supabase
      .from("users")
      .update([
        {
          attributes: userAttributes,
          updatedAt: new Date().toISOString(),
        },
      ])
      .eq("user_id", user_id)
      .select();

    if (error) throw error;
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
