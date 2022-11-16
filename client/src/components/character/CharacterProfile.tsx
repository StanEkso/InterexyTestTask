import React, { FC } from "react";
import { Character } from "../../types/character";

type Props = Character;

const CharacterProfile: FC<Props> = ({
  name,
  origin,
  gender,
  image,
  status,
  species,
  location,
  episode,
}) => {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <div className="p-2 border-2 rounded-sm">
        <div className="flex justify-center items-start">
          <img src={image} alt={name} />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>Location: {location.name}</p>
      </div>
      <div className="">
        <h3 className="text-2xl font-bold">Overview</h3>
        <p>
          Origin location: <span>{origin.name} </span>
        </p>
        <p>
          Gender: <span>{gender} </span>
        </p>
        <p>
          Status: <span>{status} </span>
        </p>
        <p>
          Species: <span>{species} </span>
        </p>
      </div>
    </div>
  );
};

export default CharacterProfile;
