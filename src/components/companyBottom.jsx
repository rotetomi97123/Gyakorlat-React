import React from "react";
import { CompanyBottom } from "../components/data";
import "./companyBottom.scss";

const companyBottom = () => {
  return (
    <div>
      {CompanyBottom.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt="img" />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default companyBottom;
