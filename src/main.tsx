import ReactPDF from "@react-pdf/renderer";
import Resume from "./Resume";
import React from "react";

ReactPDF.render(<Resume />, "resume.pdf");
