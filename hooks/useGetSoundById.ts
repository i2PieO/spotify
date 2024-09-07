import { useEffect, useMemo, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

import { Sound } from "@/types";

const useGetSoundById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sound, setSound] = useState<Sound | undefined>(undefined);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const fetchSound = async () => {
      const { data, error } = await supabaseClient
        .from('sounds')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setIsLoading(false);
        return toast.error(error.message);
      }

      setSound(data as Sound);
      setIsLoading(false);
    }

    fetchSound();
  }, [id, supabaseClient]);

  return useMemo(() => ({
    isLoading,
    sound
  }), [isLoading, sound]);
};

export default useGetSoundById;