import React from "react";
import { Navbar, Features, Hero, Testimonials, Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
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
