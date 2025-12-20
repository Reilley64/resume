"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
const react_1 = __importDefault(require("react"));
const Certificate_1 = __importDefault(require("./components/Certificate"));
const Project_1 = __importDefault(require("./components/Project"));
const data_json_1 = __importDefault(require("./data.json"));
const tailwind_1 = __importDefault(require("./tailwind"));
renderer_1.Font.registerHyphenationCallback((word) => [word]);
renderer_1.Font.register({
    family: "Geist Sans",
    fonts: [
        {
            src: "src/fonts/Geist-Light.otf",
            fontWeight: "light",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/Geist-Regular.otf",
            fontWeight: "normal",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/Geist-SemiBold.otf",
            fontWeight: "semibold",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/Geist-Bold.otf",
            fontWeight: "bold",
            fontStyle: "normal",
        },
    ],
});
renderer_1.Font.register({
    family: "Geist Mono",
    fonts: [
        {
            src: "src/fonts/GeistMono-Light.otf",
            fontWeight: "light",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/GeistMono-Regular.otf",
            fontWeight: "normal",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/GeistMono-SemiBold.otf",
            fontWeight: "semibold",
            fontStyle: "normal",
        },
        {
            src: "src/fonts/GeistMono-Bold.otf",
            fontWeight: "bold",
            fontStyle: "normal",
        },
    ],
});
function Resume() {
    return (react_1.default.createElement(renderer_1.Document, null,
        react_1.default.createElement(renderer_1.Page, { size: "A4", style: (0, tailwind_1.default)("px-6 py-6 font-sans") },
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("items-center justify-center") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("uppercase text-[20px]") }, data_json_1.default.name),
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[10px] mt-0.5 text-[#666666] text-center") }, [data_json_1.default.location, data_json_1.default.phoneNumber, data_json_1.default.email, data_json_1.default.website].filter(Boolean).join(" • ")),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full h-[1px] bg-[#666666] mt-0.5 mb-1") }),
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[9px] text-[#666666]") }, data_json_1.default.description)),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("items-center justify-center mt-2.5") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("uppercase text-[20px]") }, "Skills"),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full h-[1px] bg-[#666666] mt-0.5 mb-1") }),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("text-[9px] text-[#666666]") }, data_json_1.default.skills.map((skill, i) => (react_1.default.createElement(renderer_1.Text, { key: skill.heading, style: i > 0 ? (0, tailwind_1.default)("mt-0.5") : undefined },
                    react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("font-bold") },
                        skill.heading,
                        ":"),
                    " ",
                    skill.items.join(", ")))))),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("items-center mt-2.5 mb-[-16px]") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("uppercase text-[20px]") }, "Experience"),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full h-[1px] bg-[#666666] mt-0.5 mb-1") }),
                data_json_1.default.experience.map((experience) => (react_1.default.createElement(Project_1.default, { key: experience.title, ...experience })))),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("mt-2.5 w-full") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[9px] text-[#666666]") }, "Referees available upon request")),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("items-center mt-2.5 mb-[-16px]") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("uppercase text-[20px]") }, "Education"),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full h-[1px] bg-[#666666] mt-0.5 mb-1") }),
                data_json_1.default.education.map((education) => (react_1.default.createElement(Project_1.default, { key: education.title, ...education })))),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("items-center mt-2.5 mb-[-16px]") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("uppercase text-[20px]") }, "Certificates"),
                react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("w-full h-[1px] bg-[#666666] mt-0.5 mb-1") }),
                data_json_1.default.certificates.map((project) => (react_1.default.createElement(Certificate_1.default, { key: project.title, ...project })))),
            react_1.default.createElement(renderer_1.View, { style: (0, tailwind_1.default)("mt-2.5") },
                react_1.default.createElement(renderer_1.Text, { style: (0, tailwind_1.default)("text-[9px] text-[#666666]") },
                    "This resume was written using code, check it out here:",
                    " ",
                    react_1.default.createElement(renderer_1.Link, { src: "https://github.com/Reilley64/resume" }, "https://github.com/Reilley64/resume"))))));
}
exports.default = Resume;
