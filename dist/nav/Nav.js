"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavLink_1 = __importDefault(require("./NavLink"));
const navLinks_1 = require("./navLinks");
require("./Nav.css");
const Nav = () => {
    return (react_1.default.createElement("nav", null, navLinks_1.navLinks.map(({ navLinkId, scrollToId }, idx) => (react_1.default.createElement(NavLink_1.default, { key: idx, navLinkId: navLinkId, scrollToId: scrollToId })))));
};
exports.default = Nav;
