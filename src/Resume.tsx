import {Document, Font, Link, Page, Text, View} from "@react-pdf/renderer";
import React from "react";
import data from "./data.json";
import tw from "./tailwind";
import Project from "./components/Project";

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

        <View style={tw("items-center mt-2.5 mb-[-16px]")}>
          <Text style={tw("uppercase text-[20px]")}>Experience</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          {data.experience.map((experience, x) => <Project key={experience.title} {...experience} />)}
        </View>

        <View style={tw("mt-2.5 w-full")}>
          <Text style={tw("text-[9px] text-[#666666]")}>Referees available upon request</Text>
        </View>

        <View style={tw("items-center mt-2.5")}>
          <Text style={tw("uppercase text-[20px]")}>Education</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />

          {data.education.map((education) => <Project key={education.title} {...education} />)}
        </View>

        <View style={tw("items-center mt-2.5")}>
          <Text style={tw("uppercase text-[20px]")}>Projects</Text>
          <View style={tw("w-full h-[1px] bg-[#666666] mt-0.5 mb-1")} />
          {data.projects.map((project) => <Project key={project.title} {...project} />)}
        </View>

        <View style={tw("mt-2.5")}>
          <Text style={tw("text-[9px] text-[#666666]")}>This resume was written using code, check it out here: <Link src="https://github.com/Reilley64/resume">https://github.com/Reilley64/resume</Link></Text>
        </View>
      </Page>
    </Document>
  )
}

export default Resume;