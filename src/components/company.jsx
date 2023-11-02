import React from "react";
import { CompanyItem } from "./data";
import "./company.scss";

const company = () => {
  return (
    <div className="Company-Wrapper">
      <div className="CompanyTopWrapper">
        <img src={CompanyItem[0].img} />
        <div className="Company-textWrapper">
          <h1>{CompanyItem[0].title}</h1>
          <h2>{CompanyItem[0].titleText}</h2>
          <p>{CompanyItem[0].text}</p>
          <button className="company-btn">Saznajte više o nama</button>
        </div>
      </div>
    </div>
  );
};

export default company;
