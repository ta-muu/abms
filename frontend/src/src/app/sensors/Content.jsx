import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 200 },
  { field: "tank_name", headerName: "所属水槽", width: 200 },
  {
    field: "water_temperature_threshold",
    headerName: "水温しきい値[℃]",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    name: "センサーユニット1",
    tank_name: "タンク1",
    water_temperature_threshold: "10/6",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Sensors() {
  const [sensorsState, setSensorsState] = useState(rows);

  return (
    <>
      <Typography variant="h4">センサー</Typography>
      <Paper sx={{ height: 1000, width: "100%" }}>
        <DataGrid
          rows={sensorsState}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 100]}
          // checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
