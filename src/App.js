import "./App.css";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Profile from "./Component/Profile";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Profile />
      {/* <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
