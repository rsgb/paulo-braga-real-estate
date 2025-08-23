import { useLang } from "./LangContext";
import { Box, Typography, Grid } from "@mui/material";
import kwLogo from "../images/KWsol black.png";
import chambersLogo from "../images/chambers black.png";
import interiorLogo from "../images/host.png";

export default function Partners() {
  const { lang } = useLang();

  let partners = "";
  let subtitles = [];

  if (lang === "EN") {
    partners = "Partners";
    subtitles = ["Real Estate", "Law Firm", "Interior Design"];
  } else if (lang === "PT") {
    partners = "Parceiros";
    subtitles = [
      "Imobiliário",
      "Sociedade de Advogados",
      "Design de Interiores",
    ];
  } else if (lang === "ES") {
    partners = "Parceiros";
    subtitles = [
      "Inmobiliario",
      "Despacho de Abogados",
      "Diseño de Interiores",
    ];
  } else if (lang === "FR") {
    partners = "Partenaires";
    subtitles = ["Immobilier", "Cabinet d'avocats", "Design d'intérieur"];
  }

  const partnerLogos = [
    {
      logo: kwLogo,
      subtitle: subtitles[0],
      url: "https://www.kwportugal.pt/pt/agencia/KW-Sol-Oeiras/8336",
    },
    {
      logo: chambersLogo,
      subtitle: subtitles[1],
      url: "https://www.raposobernardo.com/",
    },
    {
      logo: interiorLogo,
      subtitle: subtitles[2],
      url: "https://www.hostdesigners.com/",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: { xs: "350px", md: "748px", lg: "1146px" },
        mt: { xs: 12, md: 15 },
      }}
      mx="auto"
      px={0}
    >
      {/* Heading */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 6,
          textAlign: "center",
        }}
      >
        {partners}
      </Typography>

      {/* Logos grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 per row on small screens
            md: "repeat(3, 1fr)", // 3 per row on medium and large screens
          },
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Partner logos */}
        {partnerLogos.map((partner, index) => (
          <Box
            key={index}
            component="a"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: "100%",
              backgroundColor: "#f5f4f2",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": {
                transform: "scale(1.05)",
              },
              p: 2,
              gap: 2,
              minHeight: "160px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.subtitle}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#2c2c2c",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {partner.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
