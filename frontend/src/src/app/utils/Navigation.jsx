import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Navigation({setContentState}) {
  const drawerWidth = 240;

  const menuItem = [
    { name: "report", text: "レポート", command: () => {setContentState('report')} },
    { name: "tanks", text: "水槽", command: () => {setContentState('tanks')} },
    { name: "sensors", text: "センサー", command: () => {setContentState('sensors')} },
    { name: "inidividuals", text: "生体", command: () => {setContentState('indivisuals')}  },
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
          {menuItem.map(({ name, text, command }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton
                 onClick={command}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
