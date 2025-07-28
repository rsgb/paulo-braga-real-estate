import { useLang } from "./LangContext";
import { Box, Grid, IconButton, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../images/KWsol white.png";
import secondLogo from "../images/PBre white.png";
import chamber from "../images/chambers white.png";

export default function Footer() {
  const { lang, setLang } = useLang();

  let footer = [];
  if (lang === "PT") {
    footer = ["Parcerias", "Sociedade de Advogados"];
  } else if (lang === "EN") {
    footer = ["Partnerships", "Law Firm"];
  } else if (lang === "ES") {
    footer = ["Colaboraciones", "Despacho de Abogados"];
  } else if (lang === "FR") {
    footer = ["Partenariats", "Cabinet d'avocats"];
  }

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
        mt: 15,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gridTemplateRows: "auto auto",
          alignItems: "start",
          gap: 4,
          transform: { md: "translateY(50px)" },
          paddingBottom: "30px",
        }}
      >
        {/* Row 1, Col 1: Partnerships Title */}
        <Typography
          variant="h1"
          sx={{
            gridColumn: 1,
            gridRow: 1,
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {footer[0]}
        </Typography>

        {/* Row 2, Col 4: Contact Icons */}
        <Box
          sx={{
            gridColumn: 4,
            gridRow: 2,
            alignSelf: "start",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <IconButton
              component={Link}
              href="tel:+351915312417"
              sx={{
                color: "#FFFFFF",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            >
              <CallIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:paulo.braga@kwportugal.pt"
              sx={{
                color: "#FFFFFF",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://wa.me/351915312417"
              sx={{
                color: "#FFFFFF",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/paulobragarealestateagentkwportugal/"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#FFFFFF",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Row 2, Col 1: KW Section */}
        <Box
          sx={{
            gridColumn: 1,
            gridRow: 2,
            alignSelf: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 1,
          }}
        >
          <Box
            component={Link}
            href="https://www.kwportugal.pt/pt/agencia/KW-Sol-Oeiras/8336"
            target="_blank"
            rel="noopener"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              p: 0.5,
              width: "fit-content",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="KW Sol Oeiras Logo"
              sx={{
                height: { xs: 36, md: 48 },
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            />
          </Box>
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

        {/* Row 2, Col 2: Chambers Section */}
        <Box
          sx={{
            gridColumn: "1 / -1",
            gridRow: 2,
            alignSelf: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            textAlign: "center",
          }}
        >
          <Box
            component={Link}
            href="https://www.raposobernardo.com/"
            target="_blank"
            rel="noopener"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              p: 0.5,
              width: "fit-content",
            }}
          >
            <Box
              component="img"
              src={chamber}
              alt="Paulo Braga Real Estate Logo"
              sx={{
                height: { xs: 60, md: 120 },
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.8,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 1,
                },
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              mt: 1,
            }}
          >
            {footer[1]}
          </Typography>
        </Box>
      </Box>
      {/* Absolute copyright in bottom-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 45 },
          right: 0,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          pr: { xs: 2, md: 6 },
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
