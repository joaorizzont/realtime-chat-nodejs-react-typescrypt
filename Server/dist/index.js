"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
// ----------------------------------------------------
var app = express_1.default();
app.use(express_1.default.static(__dirname));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
// use controllers --------------------------------------------
// app.use('/chat', chatController);
app.use('/chat', chatRoutes_1.default);
//------------------------------------------------------------
exports.default = app;
