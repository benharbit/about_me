"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useNav_1 = require("../customHooks/useNav");
require("./Page.css");
const Contact = () => {
    // useNav takes in a navLinkId and returns a ref
    // this ref is used to register the navLinkId that's
    // currently in view, and apply activeClass styling
    // to the corresponding nav childElement
    const contactRef = (0, useNav_1.useNav)('Contact');
    return (react_1.default.createElement("section", { ref: contactRef, id: 'contactContainer' },
        react_1.default.createElement("img", { src: 'https://source.unsplash.com/random/600x600/?nature,water', alt: 'unsplash-img' }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "CONTACT"),
            react_1.default.createElement("p", null, "This is the contact section"))));
};
exports.default = Contact;
