import { useLang } from "./LangContext";
import { Grid, Typography, Box, Paper } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GavelIcon from "@mui/icons-material/Gavel";

const features = [
  {
    icon: <HotelIcon sx={{ color: "black", fontSize: { xs: 40, md: 46 } }} />,
    text: "",
  },
  {
    icon: <PublicIcon sx={{ color: "black", fontSize: { xs: 40, md: 46 } }} />,
    text: "",
  },
  {
    icon: (
      <PeopleAltIcon sx={{ color: "black", fontSize: { xs: 40, md: 46 } }} />
    ),
    text: "",
  },
  {
    icon: <GavelIcon sx={{ color: "black", fontSize: { xs: 40, md: 46 } }} />,
    text: "",
  },
];

const bgColors = [
  "#FAF8F4", // off-white
  "#F9E8C5", // pale gold
  "#F6F5EF", // soft neutral
  "#EEEEEE", // light gray
];

function FeatureHighlights() {
  const { lang, setLang } = useLang();

  let services = "";

  if (lang === "EN") {
    services = "Services";
    features[0].text =
      "High expertise in hotel, leisure and senior living investments";
    features[1].text = "Wide national and international contact network";
    features[2].text = "Coordination of multidisciplinary teams";
    features[3].text = "Specialized legal advisory";
  } else if (lang === "PT") {
    services = "Serviços";
    features[0].text =
      "Especialização em investimento hoteleiro, lazer e residências sénior";
    features[1].text = "Rede de contactos nacional e internacional";
    features[2].text = "Capacidade para articular equipas multidisciplinares";
    features[3].text = "Aconselhamento jurídico especializado";
  } else if (lang === "ES") {
    services = "Servicios";
    features[0].text =
      "Especialización en inversión hotelera, ocio y residencias senior";
    features[1].text = "Red de contactos nacional e internacional";
    features[2].text = "Capacidad para coordinar equipos multidisciplinares";
    features[3].text = "Asesoramiento jurídico especializado";
  } else if (lang === "FR") {
    services = "Services";
    features[0].text =
      "Spécialisation en investissement hôtelier, loisirs et résidences seniors";
    features[1].text = "Réseau de contacts national et international";
    features[2].text = "Capacité à coordonner des équipes multidisciplinaires";
    features[3].text = "Conseil juridique spécialisé";
  }

  return (
    <Box
      sx={{ maxWidth: { xs: "350px", md: "748px", lg: "1146px" } }}
      mx="auto"
      px={0}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left column: heading */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Libre Baskerville', serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mt: { xs: 10, md: 14 },
            }}
          >
            {services}
          </Typography>
        </Grid>
        {/* Right column: feature cards */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", // 1 per row on small screens
                md: "repeat(4, 1fr)", // 4 per row on medium and large screens
              },
              gap: 3,
              justifyContent: "center",
            }}
          >
            {features.map(({ text, icon }, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: { xs: 2, md: 2.5 },
                  width: "100%",
                  aspectRatio: { xs: "auto", md: "1 / 1" },
                  backgroundColor: bgColors[index],
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  minHeight: { xs: 120, md: "unset" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: { xs: 48, md: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    mb: 1.5,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    textAlign: "center",
                    wordBreak: "break-word",
                    width: "100%",
                  }}
                >
                  {text}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureHighlights;
