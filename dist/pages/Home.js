"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useNav_1 = require("../customHooks/useNav");
require("./Page.css");
const Home = () => {
    // useNav takes in a navLinkId and returns a ref
    // this ref is used to register the navLinkId that's
    // currently in view, and apply activeClass styling
    // to the corresponding nav childElement
    const homeRef = (0, useNav_1.useNav)('Home');
    /*
    const { data, loading, error, getAuth } = useOAuth2({
        authorizeUrl: "https://example.com/auth",
        clientId: "YOUR_CLIENT_ID",
        redirectUri: `${document.location.origin}/callback`,
        scope: "YOUR_SCOPES",
        responseType: "code",
        exchangeCodeForTokenServerURL: "localhost:3001",
        exchangeCodeForTokenMethod: "POST",
        onSuccess: (payload) => console.log("Success", payload),
        onError: (error_) => console.log("Error", error_)
      });
    
     
    
      if (error) {
        return <div>Error</div>;
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (isLoggedIn) {
        return <pre>{JSON.stringify(data)}zzzz</pre>;
      }
      */
    return (react_1.default.createElement("section", { ref: homeRef, id: 'homeContainer' },
        react_1.default.createElement("img", { src: 'https://source.unsplash.com/random/600x600/?nature,water', alt: 'unsplash-img' }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "HOME"),
            react_1.default.createElement("p", null, "This is the home section"))));
};
exports.default = Home;
