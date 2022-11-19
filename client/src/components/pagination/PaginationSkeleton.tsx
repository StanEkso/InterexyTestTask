import React, { FC } from "react";

const PaginationSkeleton: FC = () => {
  return (
    <div className="flex gap-1 justify-center animation-pulse">
      <div className="rounded-sm bg-gray-200 px-2 py-1 opacity-75 pointer-events-none">
        {"< "}Prev
      </div>
      <div className="rounded-sm p-1 border-2 min-w-[32px] text-center flex justify-center items-center">
        <div className="h-4 w-4 bg-gray-300 rounded-sm"></div>
      </div>
      <div className="rounded-sm bg-gray-200 px-2 py-1 opacity-75 pointer-events-none">
        Next{" >"}
      </div>
    </div>
  );
};

export default PaginationSkeleton;
