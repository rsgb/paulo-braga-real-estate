import { Box, CardMedia, Typography } from "@mui/material";

/**
 * TwoColumnComponent
 *
 * Props:
 * - image: string (URL/path to the image)
 * - alt: string (alt text for the image)
 * - buttonText: string (text inside the button)
 * - onButtonClick: function (click handler for the button)
 * - children: ReactNode (content for the right column)
 */
export default function About({ image, alt, children }) {
  return (
    <>
      <Box className="parallax-background" sx={{ minHeight: "100%" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "350px", md: "748px", lg: "1146px" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 4, md: 10 },
            mt: { xs: 12, md: 20 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 0,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)", // 1 column on mobile
                md: "repeat(2, 1fr)", // 2 columns on md+
                lg: "repeat(2, 1fr)", // stays 2 columns on lg+
              },
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            {/* Left column: image*/}
            <Box sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                image={image}
                alt={alt}
                sx={{
                  width: { xs: "350px", md: "100%" },
                  minWidth: "350px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "center 10%",
                }}
              />
            </Box>

            {/* Right column: text */}
            <Box
              sx={{
                width: "100%",
                minWidth: "350px",

                // backgroundColor: "#212121",
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                margin="20px"
                sx={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  textAlign: "left",
                  mb: 2,
                  mt: 5,
                }}
              >
                About
              </Typography>
              <Typography
                margin="20px"
                variant="h2"
                component="div"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  textAlign: "justify",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  color: "black",
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1rem" },
                }}
              >
                {children}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
