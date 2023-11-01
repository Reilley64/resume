import {createTw} from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      sans: "Geist Sans",
      mono: "Geist Mono"
    },
    spacing: Object.fromEntries(Array.from({ length: 250 }, (_, i) => [i / 4, `${i ? i / 4 : i}rem`])),
  },
});

export default tw;
