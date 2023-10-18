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
import PersonIcon from "@mui/icons-material/Person";
function Contact() {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography>
          <p>
            If you encounter any difficulties when placing an order, experience
            issues with delivery, or have any other inquiries or feedback
            related to this website, please do not hesitate to contact us using
            the contact information provided below.
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
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "darkred", pt: 1 }} /> 1800
                  12345 54321 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  <a href="mailto:harshitaditya27@gmail.com" style={linkStyle}>
                    {" "}
                    harshitaditya27@gmail.com
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneAndroidIcon sx={{ color: "green", pt: 1 }} /> +91
                  786549875
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PersonIcon sx={{ color: "Orange", pt: 1 }} /> Harshit Aditya
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
