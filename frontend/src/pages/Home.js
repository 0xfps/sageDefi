import React from "react";
import Header from "../components/Header";
import logo from "../assets/img/logo/logo.png";
import Banner from "../components/Banner";
import Partner from "../components/Partner";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header logo={logo} />
      <main className="fix">
        <Banner />
        <Partner />
        <About />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer logo={logo} />
    </div>
  );
};

export default Home;
