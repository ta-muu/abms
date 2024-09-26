import { useState } from "react";
import dayjs from "dayjs";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AlertBox from "./Alert";
import GraphBox from "./Graph";

const rows = [
  ["時間", "水温", "閾値上限", "閾値下限"],
  ["", null, 8, 2],
  ["9/17 11:00", 10, 8, 2],
  ["9/18 12:00", 5, 8, 2],
  ["", null, 8, 2],
];

const initialTankList = [
  { id: 1, name: "水槽1" },
  { id: 2, name: "水槽2" },
];

const initialAlertList = [
  { datetime: "2024-09-27 15:00", text: "水温が閾値を上回りました (20℃)" },
  { datetime: "2024-09-26 15:00", text: "水温が閾値を上回りました (20℃)" },
];

export default function Report() {
  const [alertList, setAlertList] = useState(initialAlertList);

  const [tankList, setTankList] = useState(initialTankList);
  
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={5}>
          <Typography variant="h4">レポート</Typography>
          <AlertBox alertList={alertList} />
          <GraphBox tankList={tankList} />
        </Stack>
      </Box>
    </>
  );
}
