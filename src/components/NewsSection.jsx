import React from "react";
import styles from "./Main2.module.css";

function NewsSection() {
  const newsItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8e398d7948a1beb1c5a50fa7b98cce00aa544f964645ca89b2b5e97230855879?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Новые возможности: ещё больше данных для проверки контрагентов!",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Новые возможности: ещё больше данных для проверки контрагентов!",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/61f599ed30d5bc19ee664a6c13bfed598106e2e2bdb18604533db873d51f5af1?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Новые возможности: ещё больше данных для проверки контрагентов!",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43753ae8b857d6f5cfa5cbfcac2065c86709e109fcd0990b297244feed79647c?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Новые возможности: ещё больше данных для проверки контрагентов!",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
  ];

  return (
    <section className={styles.div42}>
      <div className={styles.div43}>
        <h2 className={styles.title3}>Новости компании</h2>
        <button className={styles.button}>
          <span className={styles.buttonprimarydefault}>Все новости</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/210f5e9647349bea8398484c839c8a15aaeec412eb13a096ca5ce8548279a722?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
            alt="Arrow"
            className={styles.img16}
          />
        </button>
      </div>
      <div className={styles.news}>
        {newsItems.map((item, index) => (
          <article
            key={index}
            className={
              index === 3
                ? styles.news8
                : index === 0
                ? styles.news2
                : index === 1
                ? styles.news4
                : styles.news6
            }
          >
            <img
              src={item.image}
              alt={item.title}
              className={
                index === 3
                  ? styles.img20
                  : index === 0
                  ? styles.img17
                  : index === 1
                  ? styles.img18
                  : styles.img19
              }
            />
            <div
              className={
                index === 3
                  ? styles.news9
                  : index === 0
                  ? styles.news3
                  : index === 1
                  ? styles.news5
                  : styles.news7
              }
            >
              <time className={styles.css12022025}>{item.date}</time>
              <h3
                className={
                  index === 0
                    ? styles.div44
                    : index === 1
                    ? styles.div45
                    : index === 2
                    ? styles.div46
                    : styles.div47
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  index === 0
                    ? styles.css502
                    : index === 1
                    ? styles.css503
                    : index === 2
                    ? styles.css504
                    : styles.css505
                }
              >
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
