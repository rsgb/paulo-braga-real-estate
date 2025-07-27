import { useLang } from "./LangContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  const { lang, setLang } = useLang();

  let title = "";
  let subtitle = "";

  if (lang === "EN") {
    title = "High-Value Real Estate Investments";
    subtitle =
      "Explore curated investment opportunities in Portugal’s high-demand sectors, tailored for national and global investors.";
  } else if (lang === "PT") {
    title = "Investimentos Imobiliários de Alto Valor";
    subtitle =
      "Explore oportunidades de investimento seleccionadas nos sectores de maior procura em Portugal, concebidas para investidores nacionais e internacionais.";
  } else if (lang === "ES") {
    title = "Inversiones Inmobiliarias de Alto Valor";
    subtitle =
      "Explore oportunidades de inversión seleccionadas en los sectores de mayor demanda en Portugal, diseñadas para inversores nacionales e internacionales.";
  } else if (lang === "FR") {
    title = "Investissements Immobiliers de Haute Valeur";
    subtitle =
      "Découvrez des opportunités d’investissement sélectionnées dans les secteurs les plus recherchés du Portugal, conçues pour les investisseurs nationaux et internationaux.";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        mb: { xs: 4, md: 10 }, // 6 units on mobile, 12 on desktop
        mt: { xs: 12, md: 20 }, // 6 units on mobile, 12 on desktop
      }}
    >
      {" "}
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: { xs: "1rem", md: "1rem" },
          mb: 2,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
