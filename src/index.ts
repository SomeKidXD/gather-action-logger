import { Game } from "@gathertown/gather-game-client";
import { API_KEY } from "../api-key";
global.WebSocket = require("isomorphic-ws");

const SPACE_ID = "";

const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }));
game.connect();

