import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 200 },
  { field: "tank_name", headerName: "所属水槽", width: 200 },
];

const rows = [
    {
        "id": 1,
        "name": "魚1",
        "tank_name": "タンク1",
    }
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Individuals() {
  const [individualsState, setIndividualsState] = useState(rows);

  return (
    <Paper sx={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={individualsState}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 100]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
