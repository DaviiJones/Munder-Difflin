import React from "react";

const CompanyInformation = () => {
    return (
      <ul className="companyInfoList">
        <li className="address">
            Address: 
            <ul>
                    <li>1234 Main St</li>
                    <li>Suite 500</li>
                    <li>Harlem, NY 10027</li>
                </ul>
        </li>
        <li className="contact">
            Contact:
            <ul>
                <li>Phone: (555) 123-4567</li>
                <li>Email: MunderDifflin@company.com</li>
            </ul>
        
        </li>

    </ul>
    );
  };
  
  export default CompanyInformation;