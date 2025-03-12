"use client";
import React from "react";
import styles from "./Services.module.css";
import Header from "./Header";
import ServiceCard from "./ServiceCard";

function Services() {
  const serviceCards = [
    {
      title: "Комплексная проверка лиц на благонадёжность",
      description: [
        "проверка потенциальных партнёров и контрагентов на предмет скрытых рисков",
        "анализ корпоративных реестров и открытых источников",
        "оценка репутации и финансовой устойчивости и благонадежности",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/117e509478be6d9aa7baa03d542e7f362e260b19a8f682b0feb326216d26e8e8?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    },
    {
      title: "Обучение по комплаенсу",
      description: [
        "организация и проведение обучающих программ по противодействию коррупции",
        "организация и проведение обучающих программ управлению конфликтом интересов",
        "соблюдению санкционных режимов и требованиям ISO 37001",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cfd3fe3865e860ab96351012a460ce9cf43c84a5df5f6eedf8b145f55f11d94a?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      imagePosition: "top",
    },
    {
      title: "Профессиональная поддержка в расширении клиентской базы",
      description: [
        "анализ рынка и выявление новых возможностей для привлечения клиентов",
        "консультирование по разработке стратегий роста и установлению партнёрств",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d474d470bc5b6ad90431f4f337543b0fa0b7dbc4a96f2a99b077a5f0b463ce85?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      imagePosition: "top",
    },
  ];

  return (
    <main className={styles.services}>
      <Header />

      <section className={styles.div}>
        <h1 className={styles.pageTitle}>Услуги</h1>

        <div className={styles.div3}>
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imagePosition={card.imagePosition}
            />
          ))}
        </div>
      </section>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/112a2035a37e078e305669f0fc48f6c8a45b8c0cbb492d93a58250c5f957173b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Footer decoration"
        className={styles.img5}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7928f12f2b00af3faa1f4c0d7d3aeab849fd3eaa63d9853e8deb534c090dbe?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Footer"
        className={styles.img6}
      />
    </main>
  );
}

export default Services;
