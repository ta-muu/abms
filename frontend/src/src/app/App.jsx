import { useState, useContext, createContext } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Header from "./utils/Header";
import Navigation from "./utils/Navigation";
import Report from "./report/Content";
import Tanks from "./tanks/Content";
import Sensors from "./sensors/Content";
import Indivisuals from "./indivisuals/Content";

export default function ClippedDrawer() {
  const initContentState = "report";

  const [contentState, setContentState] = useState(initContentState);

  const Content = () => {
    switch (contentState) {
      case 'report':
        return (
          <>
            <Report />
          </>
        );

      case 'tanks':
        return (
          <>
            <Tanks />
          </>
        );

        case 'sensors':
          return (
            <>
              <Sensors />
            </>
          );

        case 'indivisuals':
          return (
            <>
              <Indivisuals />
            </>
          );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Navigation setContentState={setContentState} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Content />
      </Box>
    </Box>
  );
}
