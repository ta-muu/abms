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

const today = new Date();
const initDuration = 7;
const initialStartDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - initDuration
);
const initialEndDate = new Date(today);

export default function AlertBox({ tankList }) {

  // google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawChart);

  // function drawChart() {
  //   var data = google.visualization.arrayToDataTable(rows);

  //   var options = {
  //     colors: ["#3366CC", "Red", "Red"],
  //     legend: { position: "bottom" },
  //     hAxis: {
  //       viewWindow: {
  //         min: 0.5,
  //         max: 3.5,
  //       },
  //     },
  //   };

  //   var chart = new google.visualization.LineChart(
  //     document.getElementById("curve_chart")
  //   );

  //   chart.draw(data, options);
  // }


  const [selectedTank, setSelectedTank] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(
    dayjs(initialStartDate)
  );
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs(initialEndDate));

  const handleTankChange = (event) => {
    setSelectedTank(event.target.value);
  };

  const MakeMenuItems = () => {
    return tankList.map(({ id, name }) => {
      return (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      );
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Typography variant="h5">測定記録</Typography>

        <FormControl fullWidth>
          <InputLabel id="tanks-input-label">水槽</InputLabel>
          <Select
            labelId="tanks-select-label"
            id="tanks-select"
            value={selectedTank}
            label="水槽"
            onChange={handleTankChange}
          >
            {MakeMenuItems()}
          </Select>
        </FormControl>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="report-start"
              label="開始日"
              value={selectedStartDate}
            />
            <DatePicker
              id="report-start"
              label="終了日"
              value={selectedEndDate}
            />
          </LocalizationProvider>
        </div>
        {/* <div id="curve_chart"></div> */}
      </Stack>
    </Box>
  );
}
