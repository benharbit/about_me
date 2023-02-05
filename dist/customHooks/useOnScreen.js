"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnScreen = void 0;
const react_1 = require("react");
const useOnScreen = (ref) => {
    const [isOnScreen, setOnScreen] = (0, react_1.useState)(false);
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
        threshold: [0.25, 0.5, 0.75],
    });
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    });
    return isOnScreen;
};
exports.useOnScreen = useOnScreen;
