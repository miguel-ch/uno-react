import Card, { COLOR } from "./Card";

class MoveValidator {
  /**
   *
   * @param card The card that is being validated
   * @param currentCard The current playing card (Board)
   * @param currentColor The current board color (Required because change color wildcard could have been used)
   * @returns If the card can be played
   */
  public validate(card: Card, currentCard: Card, currentColor: COLOR): boolean {
    // Wildcard
    if (card.isWildcard() && card.getValue() < 9) {
      // Black color, any other validation needed
      if (card.getColor() == COLOR.BLACK) return true;

      // Color wildcard, needs to match board color or the current card value
      if (card.getColor() == currentColor || card.getValue() == currentCard?.getValue()) return true;
    }
    return false;
  }
}

export default MoveValidator;
