import Tab from "@mui/material/Tab";
import React from "react";
import autoLayoutHorizontal from "./auto-layout-horizontal.png";
import autoLayoutVertical2 from "./auto-layout-vertical-2.png";
import autoLayoutVertical3 from "./auto-layout-vertical-3.png";
import autoLayoutVertical4 from "./auto-layout-vertical-4.png";
import autoLayoutVertical from "./auto-layout-vertical.png";
import xdefault from "./default.svg";
import footer from "./footer.png";
import frame from "./frame.png";
import group3 from "./group-3.png";
import image3 from "./image-3.png";
import line from "./line.svg";
import news from "./news.png";
import "./style.css";
import subtract from "./subtract.svg";
import title from "./title.png";
import vector2 from "./vector-2.png";
import vector3 from "./vector-3.png";
import vector4 from "./vector-4.png";
import vector5 from "./vector-5.png";
import vector6 from "./vector-6.png";
import vector from "./vector.png";

const Main = () => {
  return (
    <main className="main">
      <section className="container">
        <div className="hero">
          <img className="group" alt="Group" src={group3} />
          <img
            className="auto-layout-vertical"
            alt="Auto layout vertical"
            src={autoLayoutVertical2}
          />
          <img className="title" alt="Title" src={title} />
          <img
            className="auto-layout"
            alt="Auto layout"
            src={autoLayoutHorizontal}
          />
          <img
            className="img"
            alt="Auto layout vertical"
            src={autoLayoutVertical3}
          />
          <img
            className="auto-layout-vertical-2"
            alt="Auto layout vertical"
            src={autoLayoutVertical}
          />
          <img
            className="auto-layout-vertical-3"
            alt="Auto layout vertical"
            src={autoLayoutVertical4}
          />
          <img className="img-2" alt="Img" src={image3} />
        </div>

        <header className="header">
          <div className="logo">
            <div className="shield">
              <div className="overlap-group">
                <img className="subtract" alt="Subtract" src={subtract} />
              </div>
            </div>
            <div className="INTERO">
              <img className="vector" alt="Vector" src={vector} />
              <img className="vector-2" alt="Vector" src={vector2} />
              <img className="vector-3" alt="Vector" src={vector5} />
              <img className="vector-4" alt="Vector" src={vector4} />
              <img className="vector-5" alt="Vector" src={vector6} />
              <img className="vector-6" alt="Vector" src={vector3} />
            </div>
          </div>

          <nav className="navigation">
            <Tab component="div" disableRipple label="Главная" value="1:2649" />
            <Tab disableRipple label="О компании" value="default" />
            <Tab component="div" disableRipple label="Услуги" value="Услуги" />
            <Tab disableRipple label="Кейсы" value="default" />
            <Tab component="div" disableRipple label="Блог" value="Блог" />
            <Tab disableRipple label="Контакты" value="Контакты" />
            <div className="language-switcher">
              <span>ҚАЗ</span>
              <span>РУС</span>
              <span>ENG</span>
            </div>
          </nav>
        </header>

        <section className="content">
          <div className="frame">
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="group-2" />
                <img className="line" alt="Line" src={line} />
              </div>
            </div>
          </div>
        </section>

        <section className="news-section">
          <img className="news" alt="News" src={news} />
          <button className="button">
            <span className="button-primary">Все новости</span>
            <img
              className="phosphor-icons"
              alt="Phosphor icons"
              src={xdefault}
            />
          </button>
        </section>

        <footer className="footer">
          <img className="frame-2" alt="Frame" src={frame} />
          <img className="footer-img" alt="Footer" src={footer} />
        </footer>
      </section>
    </main>
  );
};

export default Main;