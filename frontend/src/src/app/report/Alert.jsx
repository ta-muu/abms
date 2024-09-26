import { Typography, Box, Stack, Alert } from "@mui/material";

export default function AlertBox({ alertList }) {
  const AlertItems = () => {
    return alertList.map(({ datetime, text }) => {
      return (
        <Alert severity="warning">
          [{datetime}]{text}
        </Alert>
      );
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <Typography variant="h5">アラート</Typography>
        <AlertItems />
      </Stack>
    </Box>
  );
}
