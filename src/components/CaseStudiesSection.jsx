import React from "react";
import styles from "./Main2.module.css";

function CaseStudiesSection() {
  const caseStudies = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/724beea0051e080b83963504c4525330ad52ab919e4f9785329aff6d3fdec841?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Кейс Магнум",
      location: "г. Астана",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5bc360257099ceb2506f0782fcc12e81513003695e70de7916a23841acd1e9da?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/827352f778aeb9c9ca839b682a7275836cbeb9788299e6dc312b7642d75461b0?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Кейс Казахмыс",
      location: "г. Астана",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5bc360257099ceb2506f0782fcc12e81513003695e70de7916a23841acd1e9da?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    },
    {
      image: null,
      title: "Кейс Mega",
      location: "г. Алматы",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5bc360257099ceb2506f0782fcc12e81513003695e70de7916a23841acd1e9da?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      },
  ];

  return (
    <section className={styles.div32}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29b430722b7ede9ebdb56b9ff58f9f368b06bd7fe5864f2622670073eca83a2e?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Background"
        className={styles.img}
      />
      <div className={styles.div33}>
        <h2 className={styles.title2}>Кейсы</h2>
        <div className={styles.autoLayoutHorizontal9}>
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className={index === 2 ? styles.group2 : styles.group}
            >
              <div
                className={
                  index === 0
                    ? styles.div34
                    : index === 1
                    ? styles.div37
                    : styles.div40
                }
              >
                <img
                  src={caseStudy.backgroundImage}
                  alt="Background"
                  className={styles.img}
                />
                {caseStudy.image && (
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className={index === 0 ? styles.img13 : styles.img14}
                  />
                )}
                <div
                  className={
                    index === 0
                      ? styles.rectangle
                      : index === 1
                      ? styles.rectangle2
                      : styles.rectangle3
                  }
                >
                  <h3
                    className={
                      index === 2
                        ? styles.mega
                        : index === 0
                        ? styles.div35
                        : styles.div38
                    }
                  >
                    {caseStudy.title}
                  </h3>
                  <p
                    className={
                      index === 0
                        ? styles.div36
                        : index === 1
                        ? styles.div39
                        : styles.div41
                    }
                  >
                    {caseStudy.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cb20f037812c0b8e31a7c711696b43ddcb82e5c24536ed0da489369e997956?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
            alt="Mega case study"
            className={styles.img15}
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
