import React, { Suspense, useMemo, useState } from "react";
import { Await } from "react-router-dom";
import { getCharacters } from "../../api/character";
import CharacterList from "../../components/characterList/CharacterList";
import CharacterListSkeleton from "../../components/characterList/CharacterListSkeleton";
import Pagination from "../../components/pagination/Pagination";
import PaginationSkeleton from "../../components/pagination/PaginationSkeleton";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const charactersPromise = useMemo(() => getCharacters(page), [page]);
  return (
    <div className="flex flex-col gap-2">
      <Suspense
        fallback={
          <>
            <CharacterListSkeleton />
            <PaginationSkeleton />
          </>
        }
      >
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
    </div>
  );
};

export default HomePage;
