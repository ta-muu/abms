import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Paper, Button, Stack } from "@mui/material";

const rows = [
  {
    id: 1,
    name: "タンク1",
  },
  {
    id: 2,
    name: "タンク2",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 200 },
  {
    field: 'editBtn',
    headerName: '詳細',
    sortable: false,
    width: 90,
    disableClickEventBubbling: true,
    renderCell: (params) => <Button variant="contained" color="primary">詳細</Button>
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Tanks() {
  const [tanksState, setTanksState] = useState(rows);

  return (
    <>
      <Typography variant="h4">水槽</Typography>
      {/* <Stack direction="row" spacing={2}>
      <Button variant="contained">削除</Button>
      <Button variant="contained">削除</Button>
      </Stack> */}
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
