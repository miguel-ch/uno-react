export enum COLOR {
  GREEN = "green",
  YELLOW = "yellow",
  BLUE = "blue",
  RED = "red",
  BLACK = "black",
}

export enum VALUE {
  // Nums
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,

  // Color wildcards
  SKIP = "SKP",
  DRAW_TWO = "+2",
  REVERSE = "RV",

  // Black wildcards
  COLOR_CHANGE = "CC",
  DRAW_FOUR = "+4",
}

class Card {
  private color: COLOR;
  private value: VALUE;
  private wildcard?: boolean;

  constructor(color: COLOR, value: VALUE, wildcard?: boolean) {
    this.color = color;
    this.value = value;
    if (wildcard) this.wildcard = wildcard;
  }

  public compare(card: Card) {
    return card.getColor() === this.color && card.getValue() === this.value && card.isWildcard() == this.wildcard;
  }

  public getColor(): COLOR {
    return this.color;
  }

  public getValue(): VALUE {
    return this.value;
  }

  public isWildcard(): boolean {
    return this.wildcard == null;
  }
}

export default Card;
