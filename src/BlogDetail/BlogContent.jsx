"use client";
import React from "react";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";

function BlogContent() {
  return (
    <main className={styles.contentWrapper}>
      <button className={styles.backButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed0cac27062d7dc7fe87ccbb5020f2b427b7ddba490c16e61b4aa2e8e9df29b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Back Arrow"
          className={styles.backButtonIcon}
        />
        <span className={styles.backButtonText}>Вернуться к блогу</span>
      </button>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6b5a8595a1ff823c9a93ad08388369551343c12fe32e42f6d995d6899b4697?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Featured Blog Image"
        className={styles.featuredImage}
      />

      <div className={styles.titleContainer}>
        <h1 className={styles.articleTitle}>
          Мировые и локальные тенденции сектора финансовых технологий
        </h1>
        <time className={styles.articleDate}>12.02.2025</time>
      </div>

      <article className={styles.articleParagraph}>
        Все регионы ощутили заметное снижение инвестиций в финтех, но наиболее
        пострадал регион EMEA (Европа, Ближний Восток и Африка), где объем
        инвестиций сократился с $19,4 млрд до $11,4 млрд. Это падение стало
        самым резким среди всех регионов, что подчеркивает уязвимость
        европейского рынка перед глобальными экономическими вызовами.
        <br />
        <br />
        Финтех-инвесторы проявляли заметную осторожность в первой половине 2024
        года. За этот период было заключено всего пять сделок стоимостью более
        $1 млрд, причем все они были связаны со сделками поглощения. Этот тренд
        отражает стремление крупных игроков минимизировать риски в условиях
        неопределенности. Однако в обеих Америках и Азиатско-Тихоокеанском
        регионе (ASPAC) объем сделок все же показал рост по сравнению с концом
        2023 года, что внушает определенный оптимизм на вторую половину года.
      </article>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d05a56b8ad59a27910a583e855b695d5468370a3f08f877414c636047e150e?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Financial Technology Chart"
        className={styles.articleImage}
      />

      <article className={styles.articleParagraph}>
        Анализируя финтех рынок целесообразно проводить анализ по следующим
        сегментам:
        <br />
        Сегмент проведения платежей (Payments);
        <br />
        Сегмент финансовых технологий в страховании (Insurtech);
        <br />
        Сегмент регуляторных технологий (Regtech);
        <br />
        Сегмент кибербезопасности (Cybersecurity);
        <br />
        Сегмент технологии управления активами (Wealthtech);
        <br />
        Сегмент криптовалюты и блокчейн (Blockchain/ cryptocurrency).
        <br />
        <br />
        На уровне секторов сегмент проведения платежей продолжал привлекать
        наибольшую долю финансирования в финтехе, собрав $21,4 млрд в первой
        половине 2024 года. Однако, при этом сегмент regtech оказался
        единственным крупным подсектором финтеха, который показал рост
        инвестиций в первой половине 2024 года c общей суммой инвестиций в
        размере $5,3 млрд., что уже превысило общий объем инвестиций за 2023
        год, который составил $3,4 млрд. Кроме того, на технологическом уровне
        искусственный интеллект (AI) оставался крайне популярной областью для
        инвесторов, особенно в США.
      </article>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d55befc4da3ce8faea1698dee89a357d207d9eecd56efaa2c237c20355fcbfe?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Financial Technology Trends"
        className={styles.articleImageSpaced}
      />

      <article className={styles.articleParagraph}>
        <h2 className={styles.sectionHeading}>ФИНТЕХ сегмент — Платежи</h2>
        <br />
        Анализируя последние тренды в платежном сегменте, стоит обозначить смену
        вектора настроений инвесторов с осуществления значительных крупных
        венчурных инвестиций к сделкам слияния и поглощения (M&A), направленных
        на консолидацию деятельности, имеющей целью масштабирование и расширение
        деятельности. В течение первого полугодия можно выделить только две
        крупные сделки на американском рынке, на общую сумму $18,8 млрд.: выкуп
        GTCR контрольного пакета акций американской компании по обработке
        платежей Worldpay на $12,5 млрд. и сделку по приобретению канадской
        Nuvei за $6,3 млрд. со стороны частной инвестиционной компании Advent
        International.
        <br />
        <br />
        Общая мировая тенденция развития платежного сегмента связана, в первую
        очередь, с ростом интереса к развитию технологий искусственного
        интеллекта, и возможностью его применения для решения проблем, связанных
        с осуществлением платежных операций. Так, например, компания Mastercard
        в первом полугодии 2024 года объявила о начале использования
        искусственного интеллекта общего уровня, который способен мыслить и
        действовать как человек (artificial general intelligence) для ускорения
        обнаружения случаев мошеннических действий с платежными картами.
      </article>

      <h2 className={styles.sectionTitle}>Другие темы</h2>

      <section className={styles.relatedArticles}>
        <div className={styles.cardContainer}>
          <BlogCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
            date="12.02.2025"
            title="Мировые и локальные тенденции сектора финансовых технологий"
            description="Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!"
          />

          <BlogCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
            date="10.02.2025"
            title="Мировые и локальные тенденции сектора финансовых технологий"
            description="Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!"
          />

          <BlogCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
            date="8.02.2025"
            title="Мировые и локальные тенденции сектора финансовых технологий"
            description="Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!"
          />
        </div>
      </section>
    </main>
  );
}

export default BlogContent;
