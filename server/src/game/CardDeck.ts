import Card, { COLOR, VALUE } from "./Card";
import Player from "./Player";

class CardDeck {
  public initPlayersDeck(players: Map<string, Player>) {
    for (let [pid, p] of players) {
      for (let i = 0; i < 7; i++) {
        p.giveCard(this.createCard());
      }
    }
  }

  public createCard(): Card {
    let color: COLOR = this.randomColor();
    let value: VALUE = this.randomValue();

    // Wildcard probability
    if (Math.random() < 0.4) {
      // Black wildcard probability
      if (Math.random() < 0.3) {
        // Half probability
        if (Math.random() < 0.4) value = VALUE.DRAW_FOUR;
        else value = VALUE.COLOR_CHANGE;

        return new Card(color, value, true);
      }

      // Color wildcard
      value = this.getRandomWild();
      return new Card(color, value, true);
    }
    return new Card(color, value, false);
  }

  private randomColor(): COLOR {
    let color = COLOR.GREEN;
    let rand = Math.floor(Math.random() * 3); // 0 to 3 random number

    switch (rand) {
      case 0:
        color = COLOR.GREEN;
        break;
      case 1:
        color = COLOR.BLUE;
        break;
      case 2:
        color = COLOR.RED;
        break;
      case 3:
        color = COLOR.YELLOW;
        break;
    }
    return color;
  }

  private randomValue(): VALUE {
    let val = VALUE.ZERO;
    let rand = Math.floor(Math.random() * 9); // 0 to 9 random number

    switch (rand) {
      case 0:
        val = VALUE.ZERO;
        break;
      case 1:
        val = VALUE.ONE;
        break;
      case 2:
        val = VALUE.TWO;
        break;
      case 3:
        val = VALUE.THREE;
        break;
      case 4:
        val = VALUE.FOUR;
        break;
      case 5:
        val = VALUE.FIVE;
        break;
      case 6:
        val = VALUE.SIX;
        break;
      case 7:
        val = VALUE.SEVEN;
        break;
      case 8:
        val = VALUE.EIGHT;
        break;
      case 9:
        val = VALUE.NINE;
        break;
    }
    return val;
  }

  private getRandomWild() {
    let val = VALUE.SKIP;
    let rand = Math.floor(Math.random() * 2);

    switch (rand) {
      case 0:
        val = VALUE.DRAW_TWO;
        break;
      case 1:
        val = VALUE.SKIP;
        break;
      case 2:
        val = VALUE.REVERSE;
        break;
    }

    return val;
  }
}
export default CardDeck;
