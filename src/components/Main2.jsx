"use client";
import React from "react";
import styles from "./Main2.module.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";
import AboutSection from "./AboutSection";
import CapabilitiesSection from "./CapabilitiesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

function Main2() {
  return (
    <main className={styles.main2}>
      <section className={styles.div}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79a475f77eef46847944a5c6163a589ec997d171c6f0e308c48ec33b75e53f53?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Background image"
          className={styles.img}
        />
        <Header />
        <HeroSection />
      </section>

      <section className={styles.div7}>
        <FeatureCards />

        <section className={styles.div20}>
          <div className={styles.div21}>
            <div className={styles.column}>
              <div className={styles.div22}>
                <h2 className={styles.title}>
                  Проверим контрагентаиз любой точки мира
                </h2>
                <div className={styles.autoLayoutVertical4}>
                  <p className={styles.div23}>
                    Мы работаем с малым, средним и крупным бизнесом,
                    предоставляя прозрачную аналитику и точные данные
                  </p>
                  <button
                    className={
                      styles.contentTextSizelargeTypeprimaryStatedefault
                    }
                  >
                    Получить консультацию
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0c88e19e48107f58393a55dd8396b8a5395e6300269910b05cdbeb9c333f51?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
                alt="Service illustration"
                className={styles.img7}
              />
            </div>
          </div>
        </section>
      </section>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/687b9619bfa408c2b94bc693d0f1be4fff1f1526f9797dc7c99a57ee95fa8cfc?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Divider"
        className={styles.img8}
      />

      <AboutSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <NewsSection />
      <Footer />
    </main>
  );
}

export default Main2;
