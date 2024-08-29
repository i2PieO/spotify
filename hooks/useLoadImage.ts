import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { Sound } from "@/types";

const useLoadImage = (sound: Sound) => {
  const supabaseClient = useSupabaseClient();

  if (!sound) {
    return null;
  }

  const { data: imageData } = supabaseClient
    .storage
    .from('images')
    .getPublicUrl(sound.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;