import React, { FC } from "react";

const CharacterProfileSkeleton: FC = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row animate-pulse">
      <div className="p-2 border-2 rounded-sm flex gap-1 flex-col">
        <div className="min-w-[200px] min-h-[200px] bg-gray-300"></div>
        <div className="w-[160px] h-5 bg-gray-400 rounded-sm"></div>
        <div className="flex gap-[1ch] items-center">
          <p>Location: </p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl font-bold">Overview</h3>
        <div className="flex gap-[1ch] items-center">
          <p>Origin location: </p>
          <div className="w-[160px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex gap-[1ch] items-center">
          <p>Gender: </p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex gap-[1ch] items-center">
          <p>Status: </p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="flex gap-[1ch] items-center">
          <p>Species: </p>
          <div className="w-[80px] h-4 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfileSkeleton;
