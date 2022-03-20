import { Game } from "@gathertown/gather-game-client";

import * as dotenv from "dotenv";

dotenv.config();
global.WebSocket = require("isomorphic-ws");

const { API_KEY, SPACE_ID } = process.env;
if (!API_KEY) {
  throw Error("API_KEY not defined");
}
if (!SPACE_ID) {
  throw Error("SPACE_ID not defined");
}

const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }));
game.connect();
