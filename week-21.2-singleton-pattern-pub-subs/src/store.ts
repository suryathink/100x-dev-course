// here we are storing the moves

interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}


export class GameManager {
  games: Game[] = [];

  private static instance: GameManager;

  //   made constructor private, so that only one signle instance of this class can be created
  private constructor() {
    this.games = [];
  }

  static getInstance() {
    if (GameManager.instance) {
      return GameManager.instance;
    } else {
      // creates single instance of game manager and returns it
      GameManager.instance = new GameManager();
      return GameManager.instance;
    }
  }

  addMove(gameId: string, move: string) {
    console.log(`Addding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves?.push(move);
  }

  addGame(gameId: string) {
    const game: Game = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Denzel",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}

