import React, { FC } from "react";
import { Character } from "../../types/character";
import CharacterCard from "../character/CharacterCard";

interface Props {
  characters: Character[];
}

const CharacterList: FC<Props> = ({ characters }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      {characters.map((c) => (
        <CharacterCard key={c.id} {...c} />
      ))}
    </div>
  );
};

export default CharacterList;
