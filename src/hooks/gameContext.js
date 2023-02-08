import { createContext } from "react";

const gameContext = createContext();

const game = {
  state: "",
  currentPlayer: 0,
  currentCard: {
    color: "",
    value: "",
  },
  players: [],
};
