import React from "react";
import styles from "./Main2.module.css";

function FeatureCards() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/22da50d927fda7b00d754cd992177d904b649451b4bf4cdb3b7f021c87f385ab?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Безопасность ваших сделок",
      description: "Мы выявляем риски до того, как они станут проблемой",
      highlighted: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3bfe271975747584564266bfa7598e1b5031a2d099451359afccabb7499e0ba?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Глубокая аналитика",
      description: "Доступ к проверенной информации из официальных источников",
      highlighted: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36e9334080fdee51b2c3cd0e4073c9ae3b537fb15fa686e851b60ee66abb4ee8?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Экспертная проверка",
      description: "Анализ юридических, финансовых и репутационных аспектов",
      highlighted: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f394e7f5db2db89bbadf5856861abe219cc3c0029c7e40ae5f797aa73687a07a?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Оперативность",
      description: "Проверка контрагента в кратчайшие сроки",
      highlighted: true,
    },
  ];

  return (
    <div className={styles.autoLayoutHorizontal5}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={
            feature.highlighted
              ? styles.autoLayoutVertical3
              : styles.autoLayoutVertical
          }
        >
          <div className={styles.div8}>
            <img
              src={feature.icon}
              alt={feature.title}
              className={styles.img3}
            />
          </div>
          <h3 className={styles.div9}>{feature.title}</h3>
          <p className={styles.div10}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
