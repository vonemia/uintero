"use client";
import React from "react";
import styles from "./Contacts.module.css";
import Header from "./Header";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import MapSection from "./MapSection";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentColumns}>
          <div className={styles.column}>
            <ContactInfo />
            <SocialLinks />
          </div>
          <div className={styles.column2}>
            <MapSection />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5f5ba077d28741fdb5f7d25de5866cc6f5b1fea79815812151361bea7b73498?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          className={styles.footerImage}
          alt="Footer graphic"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1097091ef84e024ce17b97be3c17c1a73ad550ac41f3ef82a9f4ff573ec19b7d?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          className={styles.footerLogo}
          alt="Footer logo"
        />
      </footer>
    </div>
  );
}

export default Contacts;
