import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ rows, columns }) {
  return (
    <Paper sx={{ height: 1000, fullwidth: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 100]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
