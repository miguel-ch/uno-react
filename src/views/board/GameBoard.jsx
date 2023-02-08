import React, { useState } from "react";
import CardContainer from "../../components/CardContainer";
import Deck from "../../components/Deck";
import PlayersTable from "../../components/PlayersTable";
import StateBar from "../../components/StateBar";
import CardsDeck from "../../components/CardsDeck";

const GameBoard = () => {
  const [gameState, setGameState] = useState({ name: "Ready!" });
  const [players, setPlayers] = useState([
    { name: "Miguel Chaparro", cards: [0, 2, 3] },
    { name: "Adriana", cards: [0, 1, 2] },
  ]);

  return (
    <div className="flex flex-col h-screen max-h-screen bg-red-900">
      {<StateBar state={gameState} />}
      <div className="flex justify-between content-center  bg-red-50">
        <CardContainer />
        <div>
          <PlayersTable players={players} />
          <Deck />
        </div>
      </div>
      {<CardsDeck />}
    </div>
  );
};

export default GameBoard;
