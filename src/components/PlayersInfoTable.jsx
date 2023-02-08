import React from "react";
import PlayerInfoRow from "./PlayerInfoRow";

const PlayersInfoTable = () => {
  return (
    <div className="grid grid-cols-2 gap-x-0.5 bg-slate-60000">
      <PlayerInfoRow className="border-b-4 border-blue-500" name={"Miguel"} cards={5} />
      <PlayerInfoRow className="border-b-4 border-red-500" name={"Miguel"} cards={5} />
      <PlayerInfoRow className="border-b-4 border-green-500" name={"Miguel"} cards={5} />
      <PlayerInfoRow className="border-b-4 border-yellow-500"/>
    </div>
  );
};

export default PlayersInfoTable;
