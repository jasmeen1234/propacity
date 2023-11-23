import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import headerLogo from './assets/headerLogo.png'
const Header = () => {
  return (
    <AppBar style={{ background: "rgba(0, 0, 128, 0.927)" }}>
      <Toolbar>
        <Box style={{ display: "flex" }}>
         
          <Typography variant="h5">
            <img src={headerLogo}/>
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header;