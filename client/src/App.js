import React from "react";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Sosmed
        </Typography>
        <img src={memories} alt="icon" height="100" width="600" />
      </AppBar>
    </Container>
  );
};

export default App;
