import { Grid, Typography, Box, Paper } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GavelIcon from "@mui/icons-material/Gavel";

const features = [
  {
    icon: <HotelIcon sx={{ color: "black" }} />,
    text: "High expertise in hotel, leisure and senior living investments",
  },
  {
    icon: <PublicIcon sx={{ color: "black" }} />,
    text: "Wide national and international contact network",
  },
  {
    icon: <PeopleAltIcon sx={{ color: "black" }} />,
    text: "Coordination of multidisciplinary teams",
  },
  {
    icon: <GavelIcon sx={{ color: "black" }} />,
    text: "Specialized legal advisory",
  },
];

const bgColors = [
  "#FAF8F4", // off-white
  "#F9E8C5", // pale gold
  "#F6F5EF", // soft neutral
  "#EEEEEE", // light gray
];

function FeatureHighlights() {
  return (
    <Box
      sx={{ maxWidth: { xs: "350px", md: "748px", lg: "1146px" } }}
      mx="auto"
      px={2}
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
            Services
          </Typography>
        </Grid>
        {/* Right column: feature cards */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)", // 1 per row on mobile
                md: "repeat(2, 1fr)", // 2 per row at the first breakpoint (>=900px)
                lg: "repeat(4, 1fr)", // 4 per row on large screens (>=1200px)
              },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {features.map(({ text, icon }, index) => (
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
                    {text}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureHighlights;
