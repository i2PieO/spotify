import { Sound } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSounds = async (): Promise<Sound[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from('sounds')
    .select('*')
    .order('created_at', { ascending: false });

    if (error) {
      console.log(error);
    }

    return (data as any)  || [];
};

export default getSounds;