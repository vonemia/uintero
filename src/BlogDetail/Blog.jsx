"use client";
import React from "react";
import styles from "./Blog.module.css";
import Header from "./Header";
import BlogContent from "./BlogContent";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function BlogDetail() {
  return (
    <div className={styles.blog}>
      <Header />
      <BlogContent />
      <Footer />
    </div>
  );
}

export default BlogDetail;
