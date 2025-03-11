import React from "react";
import styles from "./Main2.module.css";

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f1036e841cf531113b2d4ce464459d42f7db7c450134fc070a5ecd61ebc8d30?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      description: "Доступ к актуальным базам данных",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abe2b92631a8c2ce68335d0c262b4a0bbe1943794066263d43cbf5c7732842b3?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      description: "Комплексная проверка по 50+ критериям",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3abcdf478bae2b76d81d83ae181c866dd3287d6f087cca98fd3f3d23cc1fce8?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      description: "Автоматизированные и ручные методы анализа",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a822c42a65b9dbe9cdba4d23f20150d69e0e9cc51404bd3a9d91ad35ba4492c9?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      description: "Конфиденциальность и защита данных",
    },
  ];

  return (
    <section className={styles.autoLayoutHorizontal8}>
      {capabilities.map((capability, index) => (
        <div key={index} className={styles.autoLayoutVertical6}>
          <div className={styles.div25}>
            <img
              src={capability.icon}
              alt={capability.description}
              className={styles.img9}
            />
          </div>
          <p className={styles.div26}>{capability.description}</p>
        </div>
      ))}
    </section>
  );
}

export default CapabilitiesSection;
