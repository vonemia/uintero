import Tab from "@mui/material/Tab";
import React from "react";
import bookOpen from "./book-open.svg";
import footer from "./footer.png";
import image from "./image.png";
import star from "./star.svg";
import "./style.css";
import subtract from "./subtract.svg";
import userFocus from "./user-focus.svg";
import vector2 from "./vector-2.png";
import vector3 from "./vector-3.png";
import vector4 from "./vector-4.png";
import vector5 from "./vector-5.png";
import vector6 from "./vector-6.png";
import vector from "./vector.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <header className="header">
          <div className="logo">
            <div className="shield">
              <div className="shield-icon">
                <img className="subtract" alt="Shield Icon" src={subtract} />
              </div>
            </div>
            <div className="intero-logo">
              <img className="vector" alt="Vector" src={vector3} />
              <img className="vector-2" alt="Vector" src={vector2} />
              <img className="vector-3" alt="Vector" src={vector5} />
              <img className="vector-4" alt="Vector" src={vector} />
              <img className="vector-5" alt="Vector" src={vector6} />
              <img className="vector-6" alt="Vector" src={vector4} />
            </div>
          </div>
          <nav className="navigation">
            <Tab disableRipple label="Главная" value="default" />
            <Tab disableRipple label="О компании" value="default" />
            <Tab disableRipple label="Услуги" value="default" />
            <Tab disableRipple label="Кейсы" value="default" />
            <Tab disableRipple label="Блог" value="default" />
            <Tab disableRipple label="Контакты" value="default" />
            <div className="language-switcher">
              <span className="lang">ҚАЗ</span>
              <span className="lang active">РУС</span>
              <span className="lang">ENG</span>
            </div>
          </nav>
        </header>

        <section className="about-section">
          <div className="about-content">
            <h1>О нас</h1>
            <div className="about-description">
              <div className="text-content">
                <h2>U-Intero</h2>
                <p>
                  Компания объединяет команду экспертов с более чем 15-летним
                  опытом в сфере комплаенса, оценки благонадёжности и управления
                  корпоративными рисками. Специалисты обладают международными
                  сертификациями, включая ISO 37001, ICA (International
                  Compliance Association), а также глубокими знаниями в области
                  противодействия коррупции, управления конфликтом интересов,
                  санкционных режимов и корпоративного обучения.
                </p>
                <p>
                  Мы обеспечиваем комплексные решения для бизнеса, помогая
                  компаниям соблюдать международные стандарты, минимизировать
                  правовые и репутационные риски, а также внедрять эффективные
                  системы внутреннего контроля. Наш подход основан на
                  практическом опыте, аналитических методах и современных
                  технологиях, что позволяет клиентам уверенно управлять рисками
                  и принимать обоснованные решения.
                </p>
              </div>
              <div className="about-image">
                <img className="image" alt="Company" src={image} />
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Мы специализируемся по следующим направлениям</h2>
          <div className="services-list">
            <div className="service-card">
              <div className="icon-wrapper">
                <img className="icon" alt="User Focus" src={userFocus} />
              </div>
              <h3>Комплексная проверка лиц на благонадёжность</h3>
              <p>
                Проверка потенциальных партнёров и контрагентов на предмет
                скрытых рисков, анализ корпоративных реестров и открытых
                источников, оценка репутации и финансовой устойчивости и
                благонадежности. Услуга помогает минимизировать возможные
                репутационные и финансовые угрозы, предоставляя полную
                информацию для принятия взвешенных решений.
              </p>
            </div>

            <div className="service-card">
              <div className="icon-wrapper">
                <img className="icon" alt="Book Open" src={bookOpen} />
              </div>
              <h3>Обучение по комплаенсу</h3>
              <p>
                Организация и проведение обучающих программ по противодействию
                коррупции, управлению конфликтом интересов, соблюдению
                санкционных режимов и требованиям ISO 37001. Формат и содержание
                адаптируются к специфике отрасли, что способствует повышению
                эффективности соблюдения норм и стандартов комплаенса.
              </p>
            </div>

            <div className="service-card">
              <div className="icon-wrapper">
                <img className="icon" alt="Star" src={star} />
              </div>
              <h3>Профессиональная поддержка в расширении клиентской базы</h3>
              <p>
                Анализ рынка и выявление новых возможностей для привлечения
                клиентов, консультирование по разработке стратегий роста и
                установлению партнёрств. Экспертиза команды включает комплексные
                решения для укрепления позиций на рынке и освоения перспективных
                направлений.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <img className="footer-image" alt="Footer" src={footer} />
          <div className="footer-content">
            <h2>Надежные контрагенты – устойчивый бизнес!</h2>
            <p>
              Проверьте партнера прямо сейчас. Оставьте заявку, и мы свяжемся с
              вами в ближайшее время!
            </p>
            <form className="contact-form">
              <input type="text" placeholder="Введите ваше имя" />
              <input type="text" placeholder="+7 (XXX) XXX - XX - XX" />
              <button type="submit">Связаться с нами</button>
            </form>
            <p className="privacy-policy">
              Оставляя персональные данные вы принимаете Пользовательское
              соглашение и Политику конфиденциальности
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;