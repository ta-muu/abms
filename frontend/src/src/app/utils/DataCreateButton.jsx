import { Button } from "@mui/material";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataCreateButton() {
  return (
    <Button variant="outlined" sx={{ width: 100 }}>
      <Icon path={mdiPlus} size={1} />
      追加
    </Button>
  );
}
