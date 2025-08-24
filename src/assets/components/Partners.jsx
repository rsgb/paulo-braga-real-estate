import { useLang } from "./LangContext";
import { Box, Typography } from "@mui/material";
import kwLogo from "../images/KWsol black.png";
import chambersLogo from "../images/chambers black.png";
import interiorLogo from "../images/host.png";

export default function Partners() {
  const { lang } = useLang();

  let subtitles = [];
  let partnershipLabel = "In partnership with";

  if (lang === "EN") {
    subtitles = ["Real Estate", "Law Firm", "Interior Design"];
    partnershipLabel = "In partnership with";
  } else if (lang === "PT") {
    subtitles = [
      "Imobiliário",
      "Sociedade de Advogados",
      "Design de Interiores",
    ];
    partnershipLabel = "Em parceria com";
  } else if (lang === "ES") {
    subtitles = [
      "Inmobiliario",
      "Despacho de Abogados",
      "Diseño de Interiores",
    ];
    partnershipLabel = "En colaboración con";
  } else if (lang === "FR") {
    subtitles = ["Immobilier", "Cabinet d'avocats", "Design d'intérieur"];
    partnershipLabel = "En partenariat avec";
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
        mt: { xs: 0, md: -4.5 },
        pt: { xs: 1.5, md: 0 },
      }}
      mx="auto"
      px={0}
    >
      {/* Heading: divider with centered text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            flex: 1,
            height: 1,
            bgcolor: (t) => t.palette.custom.champagneHairline,
            borderRadius: 1,
          }}
        />
        <Typography
          component="p"
          variant="body1"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "0.02em",
            color: "#8b8680",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {partnershipLabel}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: 1,
            bgcolor: (t) => t.palette.custom.champagneHairline,
            borderRadius: 1,
          }}
        />
      </Box>

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
            sx={(theme) => ({
              width: "100%",
              // Minimal look: no background, no radius, no shadow
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "none",
              borderRadius: 0,
              // Vertical divider between columns on md+ (not on last column)
              borderRight:
                index < partnerLogos.length - 1
                  ? {
                      xs: "none",
                      md: `1px solid ${theme.palette.custom.champagneHairline}`,
                    }
                  : "none",
              // Balanced spacing
              p: { xs: 2, md: 2.25 },
              gap: 1.25,
              minHeight: "120px",
            })}
          >
            <Box
              sx={{
                width: "100%",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& img": {
                  transition: "transform 0.2s ease",
                },
                "&:hover img": {
                  transform: "translateY(-2px)",
                },
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
                color: "#000000",
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
