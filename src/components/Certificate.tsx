import { Text, View } from "@react-pdf/renderer";
import React from "react";

import tw from "../tailwind";

function Certificate(props: {
  title: string;
  subTitle: string;
  date: string;
}) {
  const { title, subTitle, date } = props;

  return (
    <View style={tw("w-full mb-1")}>
      <View style={tw("w-full")}>
        <View style={tw("justify-between items-end flex-row w-full")}>
          <Text style={tw("text-[11px]")}>{title}</Text>

          <Text style={tw("text-[8px] text-[#666666] uppercase font-mono font-light text-right")}>
            {date}
          </Text>
        </View>

        <Text style={tw("text-[11px] font-bold mt-0.25")}>{subTitle}</Text>
      </View>
    </View>
  );
}

export default Certificate;
