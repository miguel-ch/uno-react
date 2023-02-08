import React from "react";
import CurrentCardContainer from "./CurrentCardContainer";
import PlayerDeckContainer from "./PlayerDeckContainer";
import PlayersInfoTable from "./PlayersInfoTable";
import StateContainer from "./StateContainer";

const GameContainer = () => {

  return (
    <>
      <StateContainer />
      <div className="flex flex-col bg-slate-900 w-full h-screen pt-8 gap-2">
        <PlayersInfoTable />
        <div className="flex flex-auto flex-col gap-3 p-3">
          <CurrentCardContainer />
          <PlayerDeckContainer />
        </div>
      </div>
    </>
  );
};

export default GameContainer;
