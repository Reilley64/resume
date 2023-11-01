import ReactPDF from "@react-pdf/renderer";
import React from "react";

import Resume from "./Resume";

ReactPDF.render(<Resume />, "resume.pdf");
