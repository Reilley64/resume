"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
const react_1 = __importDefault(require("react"));
const tailwind_1 = __importDefault(require("../tailwind"));
function Project(props) {
    const { title, subTitle, startDate, endDate, description } = props;
    return (react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full mb-1") },
        react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full") },
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("justify-between items-center flex-row w-full") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("font-bold text-[11px]") }, title),
                startDate ? (react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[8px] text-[#666666] uppercase font-mono font-light text-right") },
                    startDate,
                    " ",
                    endDate && endDate !== startDate ? `- ${endDate}` : null)) : null),
            react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[10px] mt-0.25") }, subTitle)),
        react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("text-[9px] text-[#666666] mt-1") }, Array.isArray(description) ? (description.map((item, y) => (react_1.default.createElement(renderer_1.View, { key: item, style: (0, tailwind_1.default)(y > 0 ? "flex-row mt-0.25" : "flex-row") },
            react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("mx-1 font-bold") }, "\u2022"),
            react_1.default.createElement(renderer_1.Text, null, item))))) : (react_1.default.createElement(renderer_1.Text, null, description)))));
}
exports.default = Project;
