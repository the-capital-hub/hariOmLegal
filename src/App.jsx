import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home/>
          {/* Hero Section */}
        </section>

        <section id="about">
          {/* About Section */}
        </section>

        <section id="practice-areas">
          {/* Practice Areas */}
        </section>

        <section id="approach">
          {/* Our Approach */}
        </section>

        <section id="offices">
          {/* Our Offices */}
        </section>

        <section id="contact">
          {/* Contact Section */}
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;