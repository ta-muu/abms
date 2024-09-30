import { Button } from "@mui/material";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataEditButton() {
  return (
    <Button width="20">
    <Icon path={mdiPencil} size={1} />
    削除
  </Button>
  );
}
