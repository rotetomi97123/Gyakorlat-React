import React, { useEffect, useState } from "react";
import logo from "../assets/Group 110.svg";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.scss";

const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="topNav">
        <div className="logoDiv">
          <img src={logo} alt="logo" />
          <div>
            <h1>DVG COMPANY</h1>
            <p>SUBOTICA</p>
          </div>
        </div>
        <ul>
          <li>Srpski</li>
          <li>English</li>
          <li>Magyar</li>
        </ul>
        <AiOutlineMenu
          className="menu"
          onClick={() => setIsMobile((prev) => !prev)}
        />
      </div>
      <div className="bottomNav">
        <div className="box">
          <h2>O NAMA</h2>
          <p>vizija za uspeh</p>
        </div>
        <div className="box">
          <h2>DVG PROIZVODI</h2>
          <p>naši proizvodi</p>
        </div>
        <div className="box">
          <h2>BRENDOVI</h2>
          <p>koje zasupamo</p>
        </div>
        <div className="box">
          <h2>DISTRIBUCIJA</h2>
          <p>logistika i operativa</p>
        </div>
        <div className="box">
          <h2>SARADNJA</h2>
          <p>proširenje ponude</p>
        </div>
        <div className="box">
          <h2>NOVOSTI</h2>
          <p>aktuelnosti</p>
        </div>
        <div className="box">
          <h2>KONTAKT</h2>
          <p>kontaktirajte nas</p>
        </div>
      </div>
      {isMobile && (
        <div className="mobileNav">
          <ul>
            <li>O NAMA</li>
            <li>DVG PROIZVODI</li>
            <li>BRENDOVI</li>
            <li>DISTRIBUCIJA</li>
            <li>SARADNJA</li>
            <li>NOVOSTI</li>
            <li>KONTAKT</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default navbar;
