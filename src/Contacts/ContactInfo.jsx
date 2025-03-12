import React from "react";
import styles from "./Contacts.module.css";

function ContactInfo() {
  return (
    <section className={styles.div3}>
      <h1 className={styles.pageTitle}>Контакты</h1>
      <div className={styles.autoLayoutVertical}>
        <h2 className={styles.uInteroIso}>U-Intero ISO</h2>
        <p className={styles.css010000121}>
          <strong>Адрес:</strong> Республика Казахстан, 010000,
          <br />
          г. Астана, ул. Бараева, 12/1
        </p>
        <p className={styles.eMailmailmailkz09001800}>
          <strong>Телефон:</strong> +7 7172 456 00 00
          <br />
          <strong>Факс:</strong> +7 7172 234 00 00
          <br />
          <strong>e-mail:</strong> mail@mail.kz
          <br />
          <strong>Рабочее время:</strong> понедельник — пятница 09.00-18.00
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
