import { useState } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WaterIcon from "@mui/icons-material/Water";
import SensorsIcon from "@mui/icons-material/Sensors";
import Icon from "@mdi/react";
import { mdiChartBar, mdiFishbowl, mdiThermometer, mdiFish } from "@mdi/js";

export default function NavigationMenu({ setContentState }) {
  const drawerWidth = 240;

  // const menuItem = [
  //   { name: "report", text: "レポート", path: "/", icon: <AssessmentIcon /> },
  //   { name: "tanks", text: "水槽", path: "/tanks", icon: <WaterIcon />},
  //   { name: "sensors", text: "センサー", path: "/sensors",icon: <SensorsIcon />},
  //   { name: "inidividuals", text: "生体", path: "/individuals" },
  // ];

  const menuItem = [
    { name: "report", text: "レポート", path: "/", icon: mdiChartBar },
    { name: "tanks", text: "水槽", path: "/tanks", icon: mdiFishbowl },
    {
      name: "sensors",
      text: "センサー",
      path: "/sensors",
      icon: mdiThermometer,
    },
    { name: "inidividuals", text: "生体", path: "/individuals", icon: mdiFish },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItem.map(({ name, text, path, icon }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton href={path}>
                <Icon path={icon} size={1} />
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
