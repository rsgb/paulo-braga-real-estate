import { Box, Grid, IconButton, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../images/KWsol white.png";
import secondLogo from "../images/PBre white.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#000000",
        position: "relative",
        color: "#FFFFFF",
        minHeight: "500px",
        py: { xs: 2, md: 4 }, // reduce padding since height is fixed
        px: { xs: 2, md: 6 },
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gridTemplateRows: "auto auto",
          alignItems: "start",
          gap: 4,
          transform: { md: "translateY(50px)" },
        }}
      >
        {/* 1st row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Paulo Braga Real Estate Logo"
            sx={{ height: { xs: 60, md: 80 } }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            component="img"
            src={secondLogo}
            alt="Second Logo"
            sx={{ height: { xs: 60, md: 80 } }}
          />
        </Box>

        {/* 2nd row */}
        <Box
          sx={{
            px: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Talentos de Andrómeda - Mediação Imobiliária, LDA
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            AMI 12223 | ICV registado no Banco de Portugal n° 919
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            NIPC 513689206
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Rua José Régio 1 B,
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            2780-129 Oeiras - Portugal
          </Typography>
        </Box>
      </Box>
      {/* Absolute copyright in bottom-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 24 },
          left: { xs: "50%", md: 48 },
          transform: { xs: "translateX(-50%)", md: "none" },
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          © {new Date().getFullYear()} Paulo Braga Real Estate
        </Typography>
      </Box>
    </Box>
  );
}
