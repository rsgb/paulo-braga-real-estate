import { Typography, Box, Paper } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  { icon: <CallIcon sx={{ color: "black" }} />, label: "Phone" },
  { icon: <EmailIcon sx={{ color: "black" }} />, label: "Email" },
  { icon: <WhatsAppIcon sx={{ color: "black" }} />, label: "WhatsApp" },
  { icon: <LinkedInIcon sx={{ color: "black" }} />, label: "LinkedIn" },
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
            xs: "repeat(2, 1fr)", // 2 per row on small screens
            md: "repeat(4, 1fr)", // 4 per row on medium and large screens
          },
          gap: 4,
          mt: { xs: 4, md: 6 },
          mb: 20,
        }}
      >
        {contacts.map(({ label, icon }, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundColor: bgColors[index],
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
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
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "1rem", md: "1rem" },
                  textAlign: "center",
                  wordBreak: "break-word",
                }}
              >
                {label}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
