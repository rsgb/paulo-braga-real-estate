import ResponsiveAppBar from "./assets/components/Menu";
import ThreeColumnFeatures from "./assets/components/Opportunities";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import aboutphoto from "./assets/images/fotonb.png";
import Services from "./assets/components/Services";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";

function App() {
  return (
    <>
      <Header />
      <ResponsiveAppBar />
      <ThreeColumnFeatures />
      <Services />
      <About image={aboutphoto} buttonText="Contact Me">
        <p>
          I’m Paulo Braga, a real estate consultant focused on the acquisition
          and sale of strategic assets, with emphasis on the hotel, leisure, and
          senior residence sectors.
        </p>
        <p>
          With over 30 years of experience in management, consulting, project
          development, team leadership, and distribution networks in the private
          sector, I bring a broad perspective on negotiation, partnerships, and
          asset appreciation.
        </p>
        <p>
          I work in collaboration with national and international investors and
          multidisciplinary teams, ensuring discretion, precision, and tailored
          solutions for each context.
        </p>
      </About>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
