import { useState } from "react";
import dayjs from "dayjs";
import {
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Stack,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Graph from "./Graph";

const today = new Date();
const initDuration = 7;
const initialStartDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - initDuration
);
const initialEndDate = new Date(today);

export default function LogBox({ tankList, data }) {
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
        <div>
          <Box fullWidth  display="flex" justifyContent="center" lignItems="center">
            {" "}
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                textalign="center"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="water_temperature"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="water_temperature"
                  control={<Radio />}
                  label="水温"
                />
                <FormControlLabel
                  value="turbidity"
                  control={<Radio />}
                  label="濁度"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </div>
        <Graph data={data} />
      </Stack>
    </Box>
  );
}
