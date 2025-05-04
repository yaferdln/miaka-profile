import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#F8F8E1] overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Socials />
    </div>
  );
};

export default App;
