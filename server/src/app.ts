import { v4 } from "uuid";
import { COLOR, VALUE } from "./game/Card";
import Player from "./game/Player";
import UNO from "./game/UNO";
import CircularList from "./util/CircularList";

function replacer(key: any, value: any) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

const print = (obj: any) => {
  console.log(JSON.stringify(obj, replacer));
};

// MAIN CODE
let game = new UNO();

game.playerJoin("Miguel");
game.playerJoin("Adriana");

game.initGame();

print(game);
