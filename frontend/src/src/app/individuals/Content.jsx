import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDelete, mdiPencil, mdiPlus } from "@mdi/js";
import IndividualTable from "../utils/Table";
import DataCreationButton from "../utils/DataCreationButton";

const rows = [
  {
    id: 1,
    name: "魚1",
    tank_name: "タンク1",
  }
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "名前", width: 200 },
  { field: "tank_name", headerName: "所属水槽", width: 200 },
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
        <Button width="20">
          <Icon path={mdiDelete} size={1} />
          削除
        </Button>
        <Button>
          <Icon path={mdiPencil} size={1} />
          編集
        </Button>
      </>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Individuals() {
  const [individualsState, setIndividualsState] = useState(rows);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Typography variant="h4">生体</Typography>
          <DataCreationButton />
          <IndividualTable rows={individualsState} columns={columns} />
        </Stack>
      </Box>
    </>
  );
}
