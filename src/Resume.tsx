import {Document, Font, Link, Page, Text, View} from "@react-pdf/renderer";
import React from "react";
import {createTw} from "react-pdf-tailwind";
import data from "./data.json";

Font.registerHyphenationCallback(word => [word]);

Font.register({
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
    }
  ],
});

Font.register({
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
    }
  ],
});

const tw = createTw({
  theme: {
    fontFamily: {
      sans: "Geist Sans",
      mono: "Geist Mono"
    },
    spacing: Object.fromEntries(Array.from({ length: 250 }, (_, i) => [i / 4, `${i ? i / 4 : i}rem`])),
  },
});

function Resume() {
  return (
    <Document>
      <Page size="A4" style={tw("px-6 py-6 font-sans")}>
        <View style={tw("items-center justify-center")}>
          <Text style={tw("uppercase text-[26px]")}>{data.name}</Text>

          <Text style={tw("text-[10px] mt-0.5 text-[#666666] text-center")}>
            {[data.location, data.phoneNumber, data.email, data.website].filter(Boolean).join(" • ")}
          </Text>

          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          <Text style={tw("text-[9px] text-[#666666] text-center")}>
            {data.description}
          </Text>
        </View>

        <View style={tw("items-center justify-center mt-2.5")}>
          <Text style={tw("uppercase text-[20px]")}>Skills</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          <View style={tw("text-[9px] text-[#666666] text-center items-center")}>
            {data.skills.map((skill, i) => (
              <Text key={skill.heading} style={i > 0 ? tw("mt-0.5") : undefined}><Text style={tw("font-bold")}>{skill.heading}:</Text> {skill.items.join(", ")}</Text>
            ))}
          </View>
        </View>

        <View style={tw("items-center mt-2.5")}>
          <Text style={tw("uppercase text-[20px]")}>Experience</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          {data.experience.map((experience, x) => (
            <View key={experience.company} style={tw(x > 0 ? "w-full mt-1" : "w-full")}>
              <View style={tw("w-full")}>
                <View style={tw("justify-between items-end flex-row w-full")}>
                  <Text style={tw("text-[11px]")}>{experience.company}</Text>
                  <Text style={tw("text-[8px] text-[#666666] uppercase font-mono font-light")}>{experience.startDate} - {experience.endDate}</Text>
                </View>
                <Text style={tw("text-[11px] font-bold mt-0.25")}>{experience.position}</Text>
              </View>

              <View style={tw("text-[9px] text-[#666666] mt-1")}>
                {experience.description.map((item, y) => (
                  <View key={item} style={tw(y > 0 ? "flex-row mt-0.25" : "flex-row")}>
                    <Text style={tw("mx-1 font-bold")}>•</Text>
                    <Text>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View style={tw("mt-2 w-full")}>
            <Text style={tw("text-[9px] text-[#666666]")}>Referees available upon request</Text>
          </View>
        </View>

        <View style={tw("items-center mt-2.5")}>
          <Text style={tw("uppercase text-[20px]")}>Education</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          {data.education.map((education, x) => (
            <View key={education.institution} style={tw(x > 0 ? "w-full mt-1" : "w-full")}>
              <View style={tw("w-full")}>
                <View style={tw("justify-between items-end flex-row w-full")}>
                  <Text style={tw("text-[11px]")}>{education.institution}</Text>
                  <Text style={tw("text-[8px] text-[#666666] uppercase font-mono font-light")}>{education.startDate} {(education.endDate && education.endDate !== education.startDate) ? `- ${education.endDate}` : null}</Text>
                </View>
                <Text style={tw("text-[11px] font-bold mt-0.25")}>{education.degree}</Text>
              </View>

              <View style={tw("text-[9px] text-[#666666] mt-1")}>
                {Array.isArray(education.description) ? education.description.map((item, y) => (
                  <View key={item} style={tw(y > 0 ? "flex-row mt-0.25" : "flex-row")}>
                    <Text style={tw("mx-1 font-bold")}>•</Text>
                    <Text>{item}</Text>
                  </View>
                )) : <Text>{education.description}</Text>}
              </View>
            </View>
          ))}
        </View>

        <View style={tw("mt-2.5")}>
          <Text style={tw("text-[9px] text-[#666666]")}>This resume was written using code, check it out here: <Link src="https://github.com/Reilley64/resume">https://github.com/Reilley64/resume</Link></Text>
        </View>
      </Page>
    </Document>
  )
}

export default Resume;