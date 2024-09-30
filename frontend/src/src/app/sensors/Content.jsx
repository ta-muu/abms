import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDelete, mdiPencil, mdiPlus } from "@mdi/js";
import SensorTable from "../utils/Table";
import DataCreateButton from "../utils/DataCreateButton";
import DataDeleteButton from "../utils/DataDeleteButton";
import DataEditButton from "../utils/DataEditButton";

const rows = [
  {
    id: 1,
    name: "センサーユニット1",
    tank_name: "タンク1",
    water_temperature_threshold: "10/6",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 300 },
  { field: "tank_name", headerName: "所属水槽", width: 300 },
  {
    field: "water_temperature_threshold",
    headerName: "水温しきい値[℃]",
    width: 150,
  },
  {
    headerName: "操作",
    width: 175,
    disableClickEventBubbling: true,
    sortable: false,
    filterable: false,
    hideable: false,
    align: "center",
    renderCell: () => (
      <>
      <DataDeleteButton />
      <DataEditButton />
      </>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Sensors() {
  const [sensorsState, setSensorsState] = useState(rows);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Typography variant="h4">センサー</Typography>
            <DataCreateButton />
          <SensorTable rows={sensorsState} columns={columns} />
        </Stack>
      </Box>
    </>
  );
}
