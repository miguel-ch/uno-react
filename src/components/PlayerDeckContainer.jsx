import React from "react";
import Card from "./Card";

const PlayerDeckContainer = () => {
  let cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(<Card key={i} card={{ color: "blue", value: "+2" }} className="my-6 h-32 -mx-6" />);
  }

  return (
    <div>
      <div className="flex justify-between items-center w-auto  bg-slate-700 rounded-t-xl">
        <b className="text-xs text-slate-500 my-1 mx-3">
          Cards count: <span className="text-base">{cards.length}</span>
        </b>
        <button id="uno-button" className="text-center mx-3">
          <span className="m-3 text-xs">
            <b>UNO</b>
          </span>
        </button>
      </div>
      <div id="player-deck" className="bg-slate-800 px-9 overflow-y-scroll rounded-b-xl shadow-xl inline-flex items-center justify-center w-full">
        {cards}
      </div>
    </div>
  );
};

export default PlayerDeckContainer;
