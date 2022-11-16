import React, { FC } from "react";

const CharacterCardSkeleton: FC = () => {
  return (
    <div className="rounded-md border-2 flex overflow-hidden animate-pulse flex-col sm:flex-row">
      <div className="min-w-[200px] min-h-[200px] bg-gray-300"></div>
      <div className="p-2 flex flex-col gap-2">
        <div className="w-[160px] h-5 bg-gray-400 rounded-sm"></div>
        <div className="flex gap-[1ch] items-center">
          <p>Status</p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex gap-[1ch] items-center">
          <p>Species</p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex gap-[1ch] items-center">
          <p>Location</p>
          <div className="w-[160px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
