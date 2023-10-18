import { Box, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

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
              color: "lightgreen",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/*Icons*/}
          <a style={linkStyle} href="https://twitter.com/HarshitAditya1">
            <TwitterIcon />
          </a>
          <a style={linkStyle} href="https://github.com/HarshitAditya27">
            <GitHubIcon />
          </a>
          <a style={linkStyle} href="https://dev.to/harshitaditya1">
            <LogoDevIcon />
          </a>
          <a
            style={linkStyle}
            href="https://www.linkedin.com/in/harshitaditya/"
          >
            <LinkedInIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Created from 💖by{" "}
          <a style={linkStyle} href="https://github.com/HarshitAditya27">
            {" "}
            HarshitAditya27{" "}
          </a>
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
