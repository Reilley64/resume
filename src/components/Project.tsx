import { Text, View } from "@react-pdf/renderer";
import React from "react";

import tw from "../tailwind";

function Project(props: {
  title: string;
  subTitle: string;
  startDate?: string;
  endDate?: string;
  description: Array<string> | string;
}) {
  const { title, subTitle, startDate, endDate, description } = props;

  return (
    <View style={tw("w-full mb-1")}>
      <View style={tw("w-full")}>
        <View style={tw("justify-between items-center flex-row w-full")}>
          <Text style={tw("font-bold text-[11px]")}>{title}</Text>

          {startDate ? (
            <Text style={tw("text-[8px] text-[#666666] uppercase font-mono font-light text-right")}>
              {startDate} {endDate && endDate !== startDate ? `- ${endDate}` : null}
            </Text>
          ) : null}
        </View>

        <Text style={tw("text-[10px] mt-0.25")}>{subTitle}</Text>
      </View>

      <View style={tw("text-[9px] text-[#666666] mt-1")}>
        {Array.isArray(description) ? (
          description.map((item, y) => (
            <View key={item} style={tw(y > 0 ? "flex-row mt-0.25" : "flex-row")}>
              <Text style={tw("mx-1 font-bold")}>•</Text>
              <Text>{item}</Text>
            </View>
          ))
        ) : (
          <Text>{description}</Text>
        )}
      </View>
    </View>
  );
}

export default Project;
