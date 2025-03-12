"use client";
import React from "react";
import styles from "./Cases.module.css";
import Header from "./Header";
import CaseGallery from "./CaseGallery";

function Cases() {
  return (
    <main className={styles.cases}>
      <Header />
      <CaseGallery />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/112a2035a37e078e305669f0fc48f6c8a45b8c0cbb492d93a58250c5f957173b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Footer decoration"
        className={styles.img10}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c55c920b142067ff657e4f2fc2f5048aa56fd02e329f6397ad70e2265f4b547?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Footer"
        className={styles.img11}
      />
    </main>
  );
}

export default Cases;
