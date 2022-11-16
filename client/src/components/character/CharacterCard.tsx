import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Character } from "../../types/character";

type Props = Character;

const CharacterCard: FC<Props> = ({
  name,
  image,
  id,
  status,
  location,
  species,
}) => {
  return (
    <div className="rounded-md border-2 flex overflow-hidden">
      <div className="max-w-[200px]">
        <img src={image} alt={name} />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h3 className="text-xl">
          <Link to={`/hero/${id}`}>{name}</Link>
        </h3>
        <p>
          Status: <span>{status} </span>
        </p>
        <p>
          Species: <span>{species} </span>
        </p>
        <p>
          Location: <span>{location.name}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
