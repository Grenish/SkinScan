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
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default App;
