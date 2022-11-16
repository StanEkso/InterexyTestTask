import React, { FC, useCallback } from "react";

interface Props {
  setPage: (n: number) => void;
  currentPage: number;
  isNextPageExist: boolean;
  isPrevPageExist: boolean;
}

const Pagination: FC<Props> = ({
  setPage,
  currentPage,
  isNextPageExist,
  isPrevPageExist,
}) => {
  const nextPageHandler = useCallback(() => {
    if (!isNextPageExist) return;
    setPage(currentPage + 1);
  }, [isNextPageExist, setPage, currentPage]);
  const prevPageHandler = useCallback(() => {
    if (!isPrevPageExist) return;
    setPage(currentPage - 1);
  }, [isPrevPageExist, setPage, currentPage]);
  return (
    <div className="flex gap-1 justify-center">
      <div
        className={getSelectorClasses(isPrevPageExist)}
        onClick={prevPageHandler}
      >
        {"< "}Prev
      </div>
      <div className="rounded-sm p-1 border-2 min-w-[32px] text-center">
        {currentPage}
      </div>
      <div
        className={getSelectorClasses(isNextPageExist)}
        onClick={nextPageHandler}
      >
        Next{" >"}
      </div>
    </div>
  );
};

export default Pagination;

const getSelectorClasses = (active: boolean) =>
  active
    ? "rounded-sm bg-gray-200 px-2 py-1 cursor-pointer"
    : "rounded-sm bg-gray-200 px-2 py-1 opacity-75 pointer-events-none";
