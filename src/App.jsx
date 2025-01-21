import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="lg:px-20 md:px-10 px-5 bg-blue-300 bg-opacity-80 dark:bg-gray-900 text-black dark:text-white w-full">
          <NavBar />
        <section id="">
          <Home />
        </section>
        <section
          id="about"
          data-aos="fade-left"
          className="transition duration-500 transform"
        >
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
