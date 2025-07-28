import { useLang } from "./LangContext";
import { Container, Box, Typography } from "@mui/material";
import { useRef } from "react";
import logo from "../images/KWsol black.png";
import chamber from "../images/chambers black.png";

export default function Partners() {
  const { lang, setLang } = useLang();

  let partners = [];

  if (lang === "PT") {
    partners = ["Parceiros", "Agência Imobiliária", "Escritório de Advocacia"];
  } else if (lang === "EN") {
    partners = ["Partners", "Real Estate Agency", "Law Firm"];
  } else if (lang === "ES") {
    partners = ["Socios", "Agencia Inmobiliaria", "Despacho de Abogados"];
  } else if (lang === "FR") {
    partners = ["Partenaires", "Agence Immobilière", "Cabinet d'Avocats"];
  }

  const scrollRef = useRef(null);
  const scrollTrackRef = useRef(null);

  return (
    <Container
      maxWidth="sm"
      disableGutters
      sx={{ px: 2, mt: { xs: 12, md: 15 } }}
    >
      {/* Row 1 & 2: heading and scrolling logos, wrapped with mb: 20 */}
      <Box>
        <Box sx={{ maxWidth: { xs: 318, md: "100%" }, mx: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Libre Baskerville', serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mt: { xs: 12, md: 15 },
              textAlign: "right",
            }}
          >
            {partners[0]}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { xs: 4, md: 6 },
            mb: 20,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.kwportugal.pt/pt/agencia/KW-Sol-Oeiras/8336"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={logo}
                alt="Partner Logo Left"
                sx={{
                  height: 118,
                  width: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </a>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {partners[1]}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.raposobernardo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={chamber}
                alt="Partner Logo Right"
                sx={{
                  height: 118,
                  width: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </a>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {partners[2]}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
