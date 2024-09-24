import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 200 },
];

const rows = [
  {
    id: 1,
    name: "タンク1",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Tanks() {
  const [tanksState, setTanksState] = useState(rows);

  return (
    <>
      <Typography variant="h4">水槽</Typography>
      <Paper sx={{ height: 1000, width: "100%" }}>
        <DataGrid
          rows={tanksState}
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
