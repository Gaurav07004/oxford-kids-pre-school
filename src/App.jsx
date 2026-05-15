import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Programs from "./components/programs/Programs";
import Facilities from "./components/facilities/Facilities";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
