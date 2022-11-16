import React, { Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { getCharacterById } from "../../api/character";
import CharacterProfile from "../../components/character/CharacterProfile";
import CharacterProfileSkeleton from "../../components/character/CharacterProfileSkeleton";
import { Character } from "../../types/character";
import { NotFoundRedirect } from "../notfound/NotFoundPage";

const HeroDetailsPage = () => {
  const { hero } = useLoaderData() as ReturnType<typeof heroDetailsLoader>;
  return (
    <article className="flex flex-col gap-3">
      <div className="bg-blue-500 text-white py-1 px-2 max-w-[120px]">
        <Link to={"../"}>{"<-"} Go back</Link>
      </div>
      <Suspense fallback={<CharacterProfileSkeleton />}>
        <Await resolve={hero} errorElement={<NotFoundRedirect />}>
          {(hero: Character) => <CharacterProfile {...hero} />}
        </Await>
      </Suspense>
    </article>
  );
};

export default HeroDetailsPage;
export const heroDetailsLoader = ({ params: { id } }: LoaderFunctionArgs) => {
  if (!id) {
    throw new Error("An error occured");
  }
  return {
    hero: getCharacterById(+id),
  };
};
