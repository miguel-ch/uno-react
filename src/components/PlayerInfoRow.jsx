import React from "react";

const PlayerInfoRow = ({ name, cards, className }) => {

  return (
    <div className={"flex justify-around items-center p-3 bg-slate-800 " + className}>
      {name && cards ? (
        <div className="text-white text-opacity-80">
          <b>{name}</b> has <b>{cards}</b> cards left{" "}
        </div>
      ) : (
        <span className="text-white text-opacity-20">No Player</span>
      )}
    </div>
  );
};

export default PlayerInfoRow;
