import { LangProvider, useLang } from "./assets/components/LangContext";
import ResponsiveAppBar from "./assets/components/Menu";
import Opportunities from "./assets/components/Opportunities";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import { Box } from "@mui/material";
import aboutphoto from "./assets/images/fotonb.png";
import Services from "./assets/components/Services";
import Partners from "./assets/components/Partners";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <LangProvider>
        <ResponsiveAppBar />
        <Box id="home" sx={{ scrollMarginTop: { xs: 120, md: 160 } }}>
          <Header />
        </Box>
        <div>
          <Opportunities />
        </div>
        <Box id="services">
          <Services />
        </Box>
        <Box id="about" sx={{ scrollMarginTop: { xs: 120, md: 160 } }}>
          <About image={aboutphoto} buttonText="Contact Me" />
        </Box>
        <Box
          sx={{
            background: () =>
              `linear-gradient(180deg, #f7f5f0 0%, transparent 60%)`,
          }}
        >
          <Box id="partners" sx={{ scrollMarginTop: { xs: 120, md: 160 } }}>
            <Partners />
          </Box>
          <Box
            sx={{
              height: "1px",
              maxWidth: 920,
              mx: "auto",
              my: { xs: 6, md: 8 },
              bgcolor: (theme) => theme.palette.custom.champagneHairline,
              borderRadius: 1,
            }}
          />
          <Box id="contact" sx={{ scrollMarginTop: { xs: 120, md: 160 } }}>
            <Contact />
          </Box>
        </Box>
        <Footer />
      </LangProvider>
    </>
  );
}

export default App;
