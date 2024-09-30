import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDelete, mdiPencil, mdiPlus } from "@mdi/js";
import TankTable from "../utils/Table";
import DataCreateButton from "../utils/DataCreateButton";
import DataDeleteButton from "../utils/DataDeleteButton";
import DataEditButton from "../utils/DataEditButton";

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
  { field: "name", headerName: "名前", width: 300 },
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

export default function Tanks() {
  const [tanksState, setTanksState] = useState(rows);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Typography variant="h4">水槽</Typography>
          <DataCreateButton />
          <TankTable rows={tanksState} columns={columns} />
        </Stack>
      </Box>
    </>
  );
}
