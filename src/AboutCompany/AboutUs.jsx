"use client";
import React from "react";
import styles from "./AboutUs.module.css";
import Header from "./Header";
import CompanyInfo from "./CompanyInfo";
import Specializations from "./Specializations";

function AboutUs() {
  return (
    <main className={styles.aboutus}>
      <Header />
      <section className={styles.container}>
        <h1 className={styles.pageTitle}>О нас</h1>
        <CompanyInfo />
        <Specializations />
      </section>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/112a2035a37e078e305669f0fc48f6c8a45b8c0cbb492d93a58250c5f957173b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Company banner"
        className={styles.bannerImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde32f8997a2dbb21c0a25f3ad5ab93dce68673342c876b44c9fe951d137c67b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Company footer"
        className={styles.footerImage}
      />
    </main>
  );
}

export default AboutUs;
