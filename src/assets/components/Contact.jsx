import { useLang } from "./LangContext";
import { Typography, Box, Paper, Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    icon: <CallIcon />,
    label: "",
    href: "tel:+351915312417",
  },
  {
    icon: <EmailIcon />,
    label: "",
    href: "mailto:paulo.braga@kwportugal.pt",
  },
  {
    icon: <WhatsAppIcon />,
    label: "",
    href: "https://wa.me/351915312417",
  },
  {
    icon: <LinkedInIcon />,
    label: "",
    href: "https://www.linkedin.com/in/paulobragarealestateagentkwportugal/",
  },
];

const bgColors = [
  "#fbfaf7",
  "#fbfaf7",
  "#fbfaf7",
  "#fbfaf7",
]; // unified premium surface color

export default function Contact() {
  const { lang, setLang } = useLang();

  if (lang === "EN") {
    contacts[0].label = "Phone";
    contacts[1].label = "Email";
    contacts[2].label = "WhatsApp";
    contacts[3].label = "LinkedIn";
  } else if (lang === "ES") {
    contacts[0].label = "Teléfono";
    contacts[1].label = "Email";
    contacts[2].label = "WhatsApp";
    contacts[3].label = "LinkedIn";
  } else if (lang === "FR") {
    contacts[0].label = "Téléphone";
    contacts[1].label = "E-mail";
    contacts[2].label = "WhatsApp";
    contacts[3].label = "LinkedIn";
  } else if (lang === "PT") {
    contacts[0].label = "Telefone";
    contacts[1].label = "Email";
    contacts[2].label = "WhatsApp";
    contacts[3].label = "LinkedIn";
  }

  let contact = "";

  if (lang === "EN") {
    contact = "Contact";
  } else if (lang === "PT") {
    contact = "Contacto";
  } else if (lang === "ES") {
    contact = "Contacto";
  } else if (lang === "FR") {
    contact = "Contact";
  }

  return (
    <Container maxWidth="sm" disableGutters sx={{ px: 2 }}>
      {/* Row 1: full-width heading */}
      <Box sx={{ maxWidth: { xs: 318, md: "100%" }, mx: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mt: { xs: 10, md: 15 },
            textAlign: "center",
          }}
        >
          {contact}
        </Typography>
      </Box>

      {/* Row 2: icons grid */}
      <Box
        sx={{
          maxWidth: { xs: 318, md: "100%" },
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 per row on small screens
            md: "repeat(4, 1fr)", // 4 per row on medium and large screens
          },
          gap: 4,
          mt: { xs: 4, md: 6 },
        }}
      >
        {contacts.map(({ label, icon, href }, index) => (
          <Paper
            key={index}
            elevation={3}
            component="a"
            href={href}
            target={
              label === "LinkedIn" || label === "WhatsApp"
                ? "_blank"
                : undefined
            }
            rel={
              label === "LinkedIn" || label === "WhatsApp"
                ? "noopener noreferrer"
                : undefined
            }
            sx={{
              position: "relative",
              width: "100%",
              pt: "100%", // maintain square aspect ratio
              overflow: "hidden",
              backgroundColor: bgColors[index],
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                color: "black",
                opacity: 0.95,
                borderTop: "1px solid rgba(200, 178, 122, 0.35)",
                "& svg": {
                  fontSize: "1.5rem",
                  color: "black",
                },
              }}
            >
              {icon}
              {label}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
