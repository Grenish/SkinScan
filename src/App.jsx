import React from "react";
import { Navbar, Features, Hero, Testimonials, Footer, AfterHero } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
        <AfterHero />
        <Features />
      </section>
      <section>
        
      </section>
      <Footer />
    </div>
  );
};

export default App;
