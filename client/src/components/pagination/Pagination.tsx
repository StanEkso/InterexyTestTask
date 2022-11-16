import React, { FC } from "react";

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
  return (
    <div className="flex gap-1">
      <div className="rounded-sm bg-gray-200 p-1">{"< "}Prev</div>
      <div className="rounded-sm p-1 border-2 min-w-[32px] text-center">
        {currentPage}
      </div>
      <div className="rounded-sm bg-gray-200 p-1 ">Next{" >"}</div>
    </div>
  );
};

export default Pagination;
