"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = __importDefault(require("@react-pdf/renderer"));
const react_1 = __importDefault(require("react"));
const Resume_1 = __importDefault(require("./Resume"));
renderer_1.default.render(react_1.default.createElement(Resume_1.default, null), "resume.pdf");
