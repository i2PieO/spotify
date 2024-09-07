import { Sound } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadSoundUrl = (sound: Sound) => {
  const supabaseClient = useSupabaseClient();

  if (!sound) {
    return '';
  }

  const { data: soundData } = supabaseClient
    .storage
    .from('sounds')
    .getPublicUrl(sound.sound_path);

  return soundData.publicUrl;
};

export default useLoadSoundUrl;