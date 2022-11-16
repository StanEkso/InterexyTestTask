import React, { Suspense, useMemo, useState } from "react";
import { Await } from "react-router-dom";
import { getCharacters } from "../../api/character";
import CharacterList from "../../components/characterList/CharacterList";
import CharacterListSkeleton from "../../components/characterList/CharacterListSkeleton";
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const charactersPromise = useMemo(() => getCharacters(), []);
  return (
    <Suspense fallback={<CharacterListSkeleton />}>
      <Await resolve={charactersPromise}>
        {(promiseResult: Awaited<typeof charactersPromise>) => (
          <>
            <CharacterList characters={promiseResult.results} />
            <Pagination
              setPage={setPage}
              currentPage={page}
              isNextPageExist={!!promiseResult.info.next}
              isPrevPageExist={!!promiseResult.info.prev}
            />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default HomePage;
