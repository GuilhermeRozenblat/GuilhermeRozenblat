import "./App.css";
import Topnavbar from "./components/navbar/Topnavbar";

import Work from "./components/Work/Work";
import About from "./components/About/About";
import Home from "./components/home/Home";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./components/Contact/Contact";
import "./fonts/PPNeueMachina-InktrapLight.otf";
import "./fonts/PPNeueMachina-InktrapRegular.otf";
import "./fonts/PPNeueMachina-InktrapUltraBold.otf";
import "./fonts/PPNeueMachina-PlainLight.otf";
import "./fonts/PPNeueMachina-PlainRegular.otf";
import "./fonts/PPNeueMachina-PlainUltrabold.otf";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Home />
      <Work />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
