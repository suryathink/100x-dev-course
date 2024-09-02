"use strict";
// here we are simulate updating the state
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.GameManager.getInstance().addGame(Math.random().toString());
}, 5000);
