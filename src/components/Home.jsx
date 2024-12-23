import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Content from "./Content";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Navbar />
      <Content />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
