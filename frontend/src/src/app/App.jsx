import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Header from "./utils/Header";
import Navigation from "./utils/Navigation";
import Report from "./report/Content";
import Tanks from "./tanks/Content";
import Sensors from "./sensors/Content";
import Individuals from "./individuals/Content";

export default function ClippedDrawer() {
  const initContentState = "report";
  const [contentState, setContentState] = useState(initContentState);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Navigation setContentState={setContentState} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Report />} />
          <Route path="/tanks" element={<Tanks />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/individuals" element={<Individuals />} />
        </Routes>
      </Box>
    </Box>
  );
}
