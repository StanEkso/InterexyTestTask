import React, { FC } from "react";
import CharacterCardSkeleton from "../character/CharacterCardSkeleton";

interface Props {
  length?: number;
}

const CharacterListSkeleton: FC<Props> = ({ length = 20 }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      {Array.from({ length }).map((_, i) => (
        <CharacterCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default CharacterListSkeleton;
