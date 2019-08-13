"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FriendlyBot_1 = require("./core/FriendlyBot");
var Container_1 = require("./core/utils/Container");
var container = new Container_1.Container();
var config = require('dotenv').config();
container.register('config', config.parsed);
var bot = new FriendlyBot_1.FriendlyBot(container);
bot.run();
