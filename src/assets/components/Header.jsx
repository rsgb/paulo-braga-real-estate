import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
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
        High-Value Real Estate Investments
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
        Explore curated investment opportunities in Portugal’s high-demand
        sectors, tailored for national and global investors.
      </Typography>
    </Box>
  );
}
