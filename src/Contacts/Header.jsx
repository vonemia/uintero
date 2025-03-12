import React from "react";
import styles from "./Contacts.module.css";
import interoLogo from "./-INTERO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21de176546ba5feb1069ff974c108e5b7a6619d56eae2c07ca11bda0d97c99b3?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Company logo"
          className={styles.logoImage}
        />
        <img
          src={interoLogo}
          alt="INTERO logo"
          className={styles.interoLogo} // Add a new class for styling if needed
        />
      </div>
      <nav className={styles.navigation}>
                <Link to="/" className={styles.navLink}>
                  Главная
                </Link>
                <Link to="/about" className={styles.navLink}>
                  О компании
                </Link>
        <Link to="/services" className={styles.navLink}>
          Услуги
        </Link>
        <Link to="/cases" className={styles.navLink}>
          Кейсы
        </Link>
        <Link to="/blog" className={styles.navLink}>
          Блог
        </Link>
        <Link to="/contacts" className={`${styles.navLink} ${styles.activeNavLink}`}>
          Контакты
        </Link>
        <a href="#" className={styles.languageLink}>
          РУС
        </a>
        <a href="#" className={styles.languageOption}>
          ENG
        </a>
      </nav>
    </header>
  );
}

export default Header;
