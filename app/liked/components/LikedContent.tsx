"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Sound } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
  sounds: Sound[];
}

const LikedContent: React.FC<LikedContentProps> = ({
  sounds
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(sounds);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (sounds.length === 0) {
    return (
      <div className="
        flex
        flex-col
        gap-y-2
        w-full
        px-6
        text-neutral-400
      ">
        No liked sounds.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {sounds.map((sound) => (
        <div
          key={sound.id}
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              data={sound}
            />
         </div>
         <LikeButton soundId={sound.id} />
        </div>
      ))}
    </div>
  );
}

export default LikedContent;