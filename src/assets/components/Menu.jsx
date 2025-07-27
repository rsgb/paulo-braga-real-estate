import { useLang } from "./LangContext";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PBre from "../images/PBre black.png";

const languages = ["PT", "ES", "FR", "EN"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLang, setAnchorElLang] = React.useState(null);
  const [anchorElMobileLang, setAnchorElMobileLang] = React.useState(null);
  const { lang, setLang } = useLang();

  const pageKeys = ["home", "services", "about", "contact"];
  const pageLabels = {
    EN: ["Home", "Services", "About", "Contact"],
    PT: ["Início", "Serviços", "Sobre Mim", "Contacto"],
    ES: ["Inicio", "Servicios", "Sobre Mí", "Contacto"],
    FR: ["Accueil", "Services", "À Propos", "Contact"],
  };
  const pages = pageKeys.map((key, idx) => ({
    id: key,
    label: pageLabels[lang][idx] || pageLabels.EN[idx],
  }));

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenLangMenu = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLangMenu = () => setAnchorElLang(null);

  const handleOpenMobileLangMenu = (e) =>
    setAnchorElMobileLang(e.currentTarget);
  const handleCloseMobileLangMenu = () => setAnchorElMobileLang(null);

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            position: "relative",
            width: "100%",
            gap: 4,
          }}
        >
          {/* Logo / Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              pl: { xs: 1, md: 16 },
            }}
          >
            <img
              src={PBre}
              alt="Paulo Braga Real Estate Logo"
              style={{ height: 80, margin: 30 }}
            />
          </Box>
          {/* Mobile menu button */}
          <Box
            sx={{
              position: "absolute",
              right: 16,
              display: { xs: "flex", lg: "none" },
              gap: 1,
            }}
          >
            {/* Nav Hamburger */}
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            {/* Language Dropdown Trigger */}
            <IconButton
              size="large"
              aria-label="open language menu"
              onClick={handleOpenMobileLangMenu}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.875rem",
                }}
              >
                {lang}
              </Typography>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {pages.map((page) => (
              <MenuItem
                component="a"
                href={`#${page.id}`}
                key={page.id}
                onClick={handleCloseNavMenu}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.875rem",
                  }}
                >
                  {page.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* Mobile Language Menu */}
          <Menu
            anchorEl={anchorElMobileLang}
            open={Boolean(anchorElMobileLang)}
            onClose={handleCloseMobileLangMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {languages.map((lng) => (
              <MenuItem
                key={lng}
                selected={lng === lang}
                onClick={() => {
                  setLang(lng);
                  handleCloseMobileLangMenu();
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.875rem",
                  }}
                >
                  {lng}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* Desktop logo */}

          {/* Desktop menu links */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", lg: "flex" },
              gap: 4,
            }}
          >
            {pages.map((page) => (
              <Button
                component="a"
                href={`#${page.id}`}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ color: "inherit", display: "block" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.875rem",
                  }}
                >
                  {page.label}
                </Typography>
              </Button>
            ))}
            <Button
              onClick={handleOpenLangMenu}
              sx={{
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.875rem",
                }}
              >
                {lang}
              </Typography>
              <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorElLang}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {languages.map((lng) => (
                <MenuItem
                  key={lng}
                  selected={lng === lang}
                  onClick={() => {
                    setLang(lng);
                    handleCloseLangMenu();
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.875rem",
                    }}
                  >
                    {lng}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
