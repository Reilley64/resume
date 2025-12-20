"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_pdf_tailwind_1 = require("react-pdf-tailwind");
const tw = (0, react_pdf_tailwind_1.createTw)({
    theme: {
        fontFamily: {
            sans: "Geist Sans",
            mono: "Geist Mono",
        },
        spacing: Object.fromEntries(Array.from({ length: 250 }, (_, i) => [i / 4, `${i ? i / 4 : i}rem`])),
    },
});
exports.default = tw;
