import { Button } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataDeleteButton() {
  return (
    <Button width="20">
    <Icon path={mdiDelete} size={1} />
    削除
  </Button>
  );
}
