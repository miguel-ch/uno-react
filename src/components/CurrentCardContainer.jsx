import React from "react";
import Card from "./Card";

const CurrentCardContainer = () => {
  return (
    <>
      <div className="flex-auto flex flex-col w-full bg-slate-800 ring-1 ring-slate-900/5 rounded-xl shadow-gray-900">
        <div className="w-auto p-1 text-center bg-slate-700 rounded-t-xl">
          <b className="text-slate-500 text-sm">BOARD</b>
        </div>
        <div className="flex-auto flex flex-row justify-center items-center gap-3 my-3">
          <div className="flex justify-center items-center">
            <Card className="h-40 take-card" />
          </div>
          <div className="flex justify-center items-center">
            <Card className="h-56" />
          </div>
        </div>
        <div className="bg-emerald-500 mx-auto my-3 w-1/2 h-5 rounded-full flex items-center justify-center">
          <b className="text-xs text-opacity-40 text-white">COLOR</b>
        </div>
      </div>
    </>
  );
};

export default CurrentCardContainer;
