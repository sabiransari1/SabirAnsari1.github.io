import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Github } from "./components/Github";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useColorModeValue, Box } from "@chakra-ui/react";

function App() {
  const bgColor = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Box bgColor={bgColor} color={color}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
