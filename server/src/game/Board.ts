import Card, { COLOR } from "./Card";
import MoveValidator from "./MoveValidator";

class Board {
  currentCard: Card | null;
  currentColor: COLOR;
  validator: MoveValidator;

  constructor() {
    this.currentCard = null;
    this.currentColor = COLOR.BLACK;
    this.validator = new MoveValidator();
  }

  public changeCard(card: Card) {
    this.currentCard = card;
    this.currentColor = card.getColor();
  }

  public playCard(card: Card) {
    // Game initial state
    if (card == null) this.changeCard(card);

    // Check the current card
    if (!this.validator.validate(card, this.currentCard as Card, this.currentColor)) return false;

    this.changeCard(card);
    return true;
  }
}
export default Board;
