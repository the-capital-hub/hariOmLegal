
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Approach from "./pages/Approach/Approach";
import Offices from "./pages/Offices/Offices";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
                <Route path="/practice-areas" element={<PracticeAreas />} />
                <Route path="/approach" element={<Approach />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
