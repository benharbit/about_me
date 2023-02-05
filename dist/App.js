"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const nav_1 = require("./nav");
const pages_1 = require("./pages");
const NavContext_1 = __importDefault(require("./context/NavContext"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const react_use_oauth2_1 = require("@tasoskakour/react-use-oauth2");
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { element: react_1.default.createElement(react_use_oauth2_1.OAuthPopup, null), path: "/callback" }),
            react_1.default.createElement(react_router_dom_1.Route, { element: react_1.default.createElement("div", { className: 'appContainer' },
                    react_1.default.createElement(NavContext_1.default, null,
                        react_1.default.createElement(nav_1.Nav, null),
                        react_1.default.createElement(pages_1.Main, null))), path: "/" }))));
}
exports.default = App;
