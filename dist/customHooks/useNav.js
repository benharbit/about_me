"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNav = void 0;
const react_1 = require("react");
const useOnScreen_1 = require("./useOnScreen");
const NavContext_1 = require("../context/NavContext");
const useNav = (navLinkId) => {
    const ref = (0, react_1.useRef)(null);
    const { setActiveNavLinkId } = (0, react_1.useContext)(NavContext_1.NavContext);
    const isOnScreen = (0, useOnScreen_1.useOnScreen)(ref);
    (0, react_1.useEffect)(() => {
        if (isOnScreen) {
            setActiveNavLinkId(navLinkId);
        }
    }, [isOnScreen, setActiveNavLinkId, navLinkId]);
    return ref;
};
exports.useNav = useNav;
