import React from "react";

import CompanyDescription from "../components/companyDescription";
import CompanyImage from "../components/companyImage";
import CompanyTitle from "../components/companyTitle";
import ContactInfo from "../components/contactInfo";
import NavBar from "../navBar/NavBar";

const Home = () => {
    return(
    <div>
        <header className="header">
            <CompanyTitle />
            <NavBar />
        </header>
        <body>
            <CompanyDescription />
            <CompanyImage />
        </body>
        <footer>
            <ContactInfo />
        </footer>

    </div>
    );

  };
  
  export default Home;