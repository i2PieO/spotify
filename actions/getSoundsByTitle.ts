import { Sound } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import getSounds from "./getSounds";

const getSoundsByTitle = async (title: string): Promise<Sound[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if (!title) {
    const allSounds = await getSounds();
    return allSounds;
  }


  const { data, error } = await supabase
    .from('sounds')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false });

    if (error) {
      console.log(error);
    }

    return (data as any)  || [];
};

export default getSoundsByTitle;