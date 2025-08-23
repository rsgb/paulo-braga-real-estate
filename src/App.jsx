import { LangProvider, useLang } from "./assets/components/LangContext";
import ResponsiveAppBar from "./assets/components/Menu";
import Opportunities from "./assets/components/Opportunities";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
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
        <div id="home">
          <Header />
        </div>
        <div>
          <Opportunities />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About image={aboutphoto} buttonText="Contact Me" />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </LangProvider>
    </>
  );
}

export default App;
