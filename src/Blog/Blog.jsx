"use client";
import React from "react";
import styles from "./Blog.module.css";
import Header from "./Header";
import BlogGrid from "./BlogGrid";
import Pagination from "./Pagination";

function Blog() {
  return (
    <div className={styles.blog}>
      <Header />

      <main className={styles.div}>
        <h1 className={styles.pageTitle}>Блог</h1>

        <BlogGrid />

        <Pagination />
      </main>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/112a2035a37e078e305669f0fc48f6c8a45b8c0cbb492d93a58250c5f957173b?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Decorative footer image"
        className={styles.img16}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fafb6c3b6af033a6ca1dbd26cf094a4a50954b06d171f9f75e42b7a837ab949?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Footer logo"
        className={styles.img17}
      />
    </div>
  );
}

export default Blog;
