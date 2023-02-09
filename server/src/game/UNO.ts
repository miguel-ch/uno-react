import { v4 } from "uuid";
import Board from "./Board";
import Card from "./Card";
import CardDeck from "./CardDeck";
import Player from "./Player";

enum STATE {
  WAITING_TO_START = "waiting",
  PLAYING = "playing",
  ENDED = "ended",
  WAITING_COLOR_CHANGE = "color",
  WAITING_DRAW_FOUR = "draw",
}

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 4;

class UNO {
  private board: Board;
  private deck: CardDeck;
  private players: Map<string, Player>;
  private state: STATE;
  private currentPlayer: Player | null;

  constructor() {
    this.board = new Board();
    this.deck = new CardDeck();
    this.players = new Map<string, Player>();
    this.state = STATE.WAITING_TO_START;
    this.currentPlayer = null;
  }

  public initGame(): boolean {
    if (this.players.size < MIN_PLAYERS || this.players.size > MAX_PLAYERS) return false;

    // Player deck
    this.deck.initPlayersDeck(this.players);

    // Board initial card
    this.board.playCard(this.deck.createCard());

    this.state = STATE.PLAYING;
    return true;
  }

  public playerJoin(name: string) {
    if (this.state !== STATE.WAITING_TO_START && this.players.size >= MAX_PLAYERS) return false;

    // Check if it is already
    let alreadyPlaying = false;
    this.players.forEach((p) => {
      if (p.getName() == name) {
        alreadyPlaying = true;
        return;
      }
    });

    // Player can join
    let playerId = v4();
    let player = new Player(playerId, name);
    this.players.set(playerId, player);
  }

  public playerPlayCard(player: Player, card: Card) {
    if (this.state !== STATE.PLAYING && this.currentPlayer?.getId() !== player.getId()) return;

    if (this.board.playCard(card)) {
    }
  }

  public getPlayers() {
    return this.players;
  }

  private nextPlayer() {}

  private selectRandomPlayer() {
    let keys = Array.from(this.players.keys());
    return keys[Math.floor(Math.random() * keys.length)];
  }
}

export default UNO;
