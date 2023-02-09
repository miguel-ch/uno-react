import { v4 } from "uuid";
import Card from "./Card";

class Player {
  private id: string;
  private name: string;
  private cards: Card[];

  constructor(id: string, name: string, cards?: Card[]) {
    this.id = id;
    this.name = name;
    this.cards = [];
    if (cards) this.cards = cards;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCards(): Card[] {
    return this.cards;
  }

  public giveCard(card: Card): void {
    this.cards.push(card);
  }
  public useCard(card: Card): void {
    this.cards = this.cards.filter((c) => c != card);
  }
}

export default Player;
