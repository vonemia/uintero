import Tab from "@mui/material/Tab";
import React from "react";
import "./style.css";
import contactMap from "./2025-03-07-11-08-31-1.png";
import autoLayoutVertical from "./auto-layout-vertical.png";
import footer from "./footer.png";
import contactImage from "./image.png";
import socialIcons from "./social.svg";
import subtract from "./subtract.svg";
import vector2 from "./vector-2.png";
import vector3 from "./vector-3.png";
import vector4 from "./vector-4.png";
import vector5 from "./vector-5.png";
import vector6 from "./vector-6.png";
import vector from "./vector.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <header className="header">
          <div className="logo">
            <div className="shield">
              <img className="subtract" alt="Logo" src={subtract} />
            </div>
            <div className="INTERO">
              <img className="vector" alt="Vector" src={vector5} />
              <img className="img" alt="Vector" src={vector3} />
              <img className="vector-2" alt="Vector" src={vector} />
              <img className="vector-3" alt="Vector" src={vector2} />
              <img className="vector-4" alt="Vector" src={vector6} />
              <img className="vector-5" alt="Vector" src={vector4} />
            </div>
          </div>
          <nav className="navigation">
            <Tab disableRipple label="Главная" />
            <Tab disableRipple label="О компании" />
            <Tab disableRipple label="Услуги" />
            <Tab disableRipple label="Кейсы" />
            <Tab disableRipple label="Блог" />
            <Tab disableRipple label="Контакты" />
          </nav>
          <div className="language-switcher">
            <span>ҚАЗ</span>
            <span className="active">РУС</span>
            <span>ENG</span>
          </div>
        </header>

        <section className="contact-info">
          <h1>Контакты</h1>
          <p>
            <strong>U-Intero ISO</strong>
          </p>
          <p>
            Адрес: Республика Казахстан, 010000, г. Астана, ул. Бараева, 12/1
          </p>
          <p>Телефон: +7 7172 456 00 00</p>
          <p>Факс: +7 7172 234 00 00</p>
          <p>E-mail: mail@mail.kz</p>
          <p>Рабочее время: понедельник — пятница 09:00-18:00</p>
          <img className="contact-map" alt="Map" src={contactMap} />
          <div className="social-icons">
            <img src={socialIcons} alt="Social Media" />
          </div>
        </section>

        <section className="contact-image">
          <img
            className="auto-layout-vertical"
            alt="Auto layout vertical"
            src={autoLayoutVertical}
          />
          <img className="image" alt="Server Room" src={contactImage} />
        </section>

        <footer className="footer">
          <img className="footer-image" alt="Footer" src={footer} />
          <div className="footer-content">
            <p>© U-Intero ISO</p>
            <nav>
              <a href="#">О компании</a>
              <a href="#">FAQ</a>
              <a href="#">Контакты</a>
            </nav>
            <p>Следите за нами в соц. сетях</p>
            <div className="social-icons">
              <img src={socialIcons} alt="Social Media" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contacts;