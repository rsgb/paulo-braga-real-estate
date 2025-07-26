import React from "react";
import hotels from "../images/hotels.jpg";
import seniorliving from "../images/seniorliving.jpg";
import entertainment from "../images/entertainment.jpg";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const data = [
  {
    img: hotels,
    title: "Hotels",
    description:
      "3 to 5-star units, operating or with approved projects, in major cities and tourist destinations in Portugal. Available with or without operator. Ideal for hotel investors or property funds.",
  },
  {
    img: entertainment,
    title: "Leisure & Entertainment",
    description:
      "Properties with high income potential and appreciation. Ideal for restaurants, nightlife, events, or culture. Available with licenses, leased operations, or land with conversion potential.",
  },
  {
    img: seniorliving,
    title: "Senior Living / Health",
    description:
      "Land with approved projects or operational assets for assisted living, senior tourism, or health care. Strong international demand from insurers, funds, and specialized operators.",
  },
];

export default function ThreeCards() {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: "10px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 6,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map(({ img, title, description }) => (
            <Card
              key={title}
              elevation={3}
              sx={{
                width: "350px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={img}
                  alt={title}
                  height={400}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "'Libre Baskerville', serif" }}
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "1rem", md: "1rem" },
                      mb: 2,
                    }}
                    color="text.secondary"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
