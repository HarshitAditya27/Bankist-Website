import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque
            voluptatum neque blanditiis odio nemo a, beatae fugit ipsa commodi
            dicta dolorum. Quos vitae nobis error quo? Cumque, molestias
            incidunt?
          </p>
        </Typography>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  CD
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "darkred", pt: 1 }} /> 12345
                  (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@email.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneAndroidIcon sx={{ color: "green", pt: 1 }} />{" "}
                  help@email.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
