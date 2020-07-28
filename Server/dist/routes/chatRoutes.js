"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var chatController_1 = __importDefault(require("../controllers/chatController"));
routes.get('/messages', chatController_1.default.messages);
routes.post('/send', chatController_1.default.sendMessage);
exports.default = routes;
