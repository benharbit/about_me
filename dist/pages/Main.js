"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _1 = require("./");
const Main = () => (react_1.default.createElement("main", null,
    react_1.default.createElement(_1.Home, null),
    react_1.default.createElement(_1.About, null),
    react_1.default.createElement(_1.Contact, null)));
exports.default = Main;
