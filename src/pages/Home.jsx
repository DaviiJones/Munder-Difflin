import React from "react";

import CompanyDescription from "../components/companyDescription";
import CompanyImage from "../components/companyImage";
import CompanyTitle from "../components/companyTitle";
import ContactInfo from "../components/contactInfo";
import NavBar from "../navBar/NavBar";

import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <header className="main-content">
        <CompanyTitle />
        <NavBar />
      </header>
      <body>
        <CompanyImage />
        <CompanyDescription />
      </body>
      <footer className="footer">
        <ContactInfo />
      </footer>
    </div>
  );
};

export default Home;
/*
Design a mobile-responsive website for a fictional paper company called Munder Difflin. The site should include a header, a main content area, and a footer. The layout should adjust for different screen sizes using CSS positioning, display properties, and media queries.
*/