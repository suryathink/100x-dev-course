"use strict";
// here we are storing the moves
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    //   made constructor private, so that only one signle instance of this class can be created
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        else {
            // creates single instance of game manager and returns it
            GameManager.instance = new GameManager();
            return GameManager.instance;
        }
    }
    addMove(gameId, move) {
        var _a;
        console.log(`Addding move ${move} to game ${gameId}`);
        const game = this.games.find((game) => game.id === gameId);
        (_a = game === null || game === void 0 ? void 0 : game.moves) === null || _a === void 0 ? void 0 : _a.push(move);
    }
    addGame(gameId) {
        const game = {
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
exports.GameManager = GameManager;
