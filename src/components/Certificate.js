"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
const react_1 = __importDefault(require("react"));
const tailwind_1 = __importDefault(require("../tailwind"));
function Certificate(props) {
    const { title, subTitle, date } = props;
    return (react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full mb-1") },
        react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full") },
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("justify-between items-end flex-row w-full") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[11px]") }, title),
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[8px] text-[#666666] uppercase font-mono font-light text-right") }, date)),
            react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[11px] font-bold mt-0.25") }, subTitle))));
}
exports.default = Certificate;
