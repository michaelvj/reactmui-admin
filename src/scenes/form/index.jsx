import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user profile" />
      <Box 
      >

      </Box>
    </Box>
  )
}

export default Invoices;