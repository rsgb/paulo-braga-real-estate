import { Box, Grid, IconButton, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../images/logow.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#000000",
        color: "#FFFFFF",
        height: { xs: "400px", md: "500px" }, // fixed larger height
        py: { xs: 2, md: 4 }, // reduce padding since height is fixed
        px: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 4, md: 50, lg: 105 }}
        rowSpacing={2}
        alignItems="center"
      >
        {/* Left column: Logo */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Paulo Braga Real Estate Logo"
            sx={{ height: { xs: 60, md: 100 } }}
          />
        </Grid>

        {/* Right column: Icons and Copyright */}
        <Grid item xs={12} md={8}>
          {/* Icons row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <IconButton
              component={Link}
              href="tel:+351123456789"
              sx={{ color: "#FFFFFF" }}
            >
              <CallIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:info@paulobraga-realestate.pt"
              sx={{ color: "#FFFFFF" }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://wa.me/351123456789"
              sx={{ color: "#FFFFFF" }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/paulobraga"
              target="_blank"
              rel="noopener"
              sx={{ color: "#FFFFFF" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          {/* Copyright row */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              © {new Date().getFullYear()} Paulo Braga Real Estate
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
