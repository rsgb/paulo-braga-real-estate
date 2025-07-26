import { Typography, Box, Paper } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    icon: <CallIcon sx={{ color: "black" }} />,
    label: "Phone",
    action: () => window.open("tel:+1234567890", "_self"), // replace with your phone number
  },
  {
    icon: <EmailIcon sx={{ color: "black" }} />,
    label: "Email",
    action: () => window.open("mailto:your@email.com", "_self"), // replace with your email
  },
  {
    icon: <WhatsAppIcon sx={{ color: "black" }} />,
    label: "WhatsApp",
    action: () =>
      window.open(
        "https://wa.me/1234567890", // replace with your WhatsApp number (no + or spaces)
        "_blank"
      ),
  },
  {
    icon: <LinkedInIcon sx={{ color: "black" }} />,
    label: "LinkedIn",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/yourprofile", // replace with your LinkedIn profile URL
        "_blank"
      ),
  },
];

const bgColors = ["#FAF8F4", "#F9E8C5", "#F6F5EF", "#EEEEEE"];

export default function Contact() {
  return (
    <Box sx={{ width: "100%", maxWidth: "573px", mx: "auto", px: 2 }}>
      {/* Row 1: full-width heading */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
          mt: { xs: 10, md: 14 },
          textAlign: "left",
        }}
      >
        Contact
      </Typography>

      {/* Row 2: icons grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
          mt: { xs: 4, md: 6 },
          mb: 20,
        }}
      >
        {contacts.map(({ label, icon, action }, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundColor: bgColors[index],
              transition: "transform 0.3s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.05)" },
            }}
            onClick={action}
            tabIndex={0}
            role="button"
            aria-label={label}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") action();
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: 2,
              }}
            >
              {icon}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
