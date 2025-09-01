import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import ContactSticky from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="transition duration-1000 transform bg-blue-300 bg-opacity-80 dark:bg-gray-900 text-black dark:text-white cursor-light dark:cursor-dark">
        <NavBar />
        {/* <ContactSticky /> */}

        <section id="" className="transition duration-500 transform">
          <Home />
        </section>
        <section
          id="about"
          data-aos="fade-left"
          className="transition duration-500 transform"
        >
          <About />
        </section>
        <section
          id="projects"
          data-aos="fade-left"
          className="transition duration-500 transform"
        >
          <Projects />
        </section>
        {/* <section
          id="contact"
          data-aos="fade-left"
          className="transition duration-500 transform"
          >
          <Contact />
          </section> */}
        <section
          id="blogs"
          data-aos="fade-left"
          className="transition duration-500 transform"
        >
          <Blogs />
        </section>
        <section
          id="footer"
          data-aos="fade-left"
          className="transition duration-500 transform"
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
