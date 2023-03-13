import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Profile from "./Component/Profile";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import Theme from "./Component/Theme";
import { useState } from "react";
import { ToggleContext } from "./Component/Context";

function Home() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    console.log(toggle);
    setToggle(!toggle);
  }

  return (
    <div>
      <ToggleContext.Provider value={{ handleClick, toggle }}>
        <Theme />
        <Hero />

        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ToggleContext.Provider>
    </div>
  );
}

export default Home;
