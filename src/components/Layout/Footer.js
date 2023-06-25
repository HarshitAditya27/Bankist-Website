import { Box, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
function Footer() {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "purple",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/*Icons*/}
          <TwitterIcon />
          <GitHubIcon />
          <LogoDevIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Created from 💖by HarshitAditya27
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
