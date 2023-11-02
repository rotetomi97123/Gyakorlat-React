import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Company from "./components/company";
import CompanyMid from "./components/companyMid";
import CompanyBottom from "./components/companyBottom";
import Brojima from "./components/brojima";
import NasiProizvodi from "./components/nasiProizvodi";
import Brendovi from "./components/brendovi";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <CompanyMid />
      <CompanyBottom />
      {/* <Brojima />
      <NasiProizvodi />
      <Brendovi />
      <Footer /> */}
    </div>
  );
};

export default App;
