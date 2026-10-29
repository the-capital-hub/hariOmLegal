
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Approach from "./pages/Approach/Approach";
import Offices from "./pages/Offices/Offices";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollEffects from "./components/ScrollAnimation/ScrollEffects";
import OurTeam from "./pages/Team/OurTeam";
import DisclaimerModal from "./components/DisclaimerModal/DisclaimerModal";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <ScrollToTop/>
      <ScrollEffects/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
                <Route path="/practice-areas" element={<PracticeAreas />} />
                <Route path="/approach" element={<Approach />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/our-team" element={<OurTeam />} />

        </Routes>
      </main>
      <WhatsAppFloat/>

      <Footer />
      <DisclaimerModal/>
    </BrowserRouter>
  );
}

export default App;
