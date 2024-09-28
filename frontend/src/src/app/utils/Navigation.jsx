import { useState } from "react";
import {Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function Navigation({setContentState}) {
  const drawerWidth = 240;

  const menuItem = [
    { name: "report", text: "レポート", path: "/"},
    { name: "tanks", text: "水槽", path: "/tanks"},
    { name: "sensors", text: "センサー", path: "/sensors"},
    { name: "inidividuals", text: "生体", path: "/individuals"},
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
          {menuItem.map(({ name, text, path }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton
                href={path}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
