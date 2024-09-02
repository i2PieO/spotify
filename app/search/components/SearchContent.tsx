"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Sound } from "@/types";

interface SearchContentProps {
  sounds: Sound[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  sounds
}) => {
  if (sounds.length === 0) {
    return (
      <div
        className="
          flex
          flex-col
          gap-y-2
          w-full
          px-6
          text-neutral-400
        "
      >
        No sounds found.
      </div>
    )
  }

  return ( 
    <div className="flex flex-col gap-y-2 w-full px-6">
      {sounds.map((sound) => (
        <div
          key={sound.id}
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem
              onClick={() => {}}
              data={sound}
            />
          </div>
          <LikeButton soundId={sound.id} />
        </div>
      ))}
    </div>
   );
}
 
export default SearchContent;