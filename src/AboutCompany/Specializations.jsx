import React from "react";
import styles from "./AboutUs.module.css";
import SpecializationCard from "./SpecializationCard";

function Specializations() {
  const specializationData = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd56745194e98c530bef156b3af3ed7004862d43e1a7ef37c837ffa32725d88c?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Комплексная проверка лиц на благонадёжность",
      description:
        "Проверка потенциальных партнёров и контрагентов на предмет скрытых рисков, анализ корпоративных реестров и открытых источников, оценка репутации и финансовой устойчивости и благонадежности. Услуга помогает минимизировать возможные репутационные и финансовые угрозы, предоставляя полную информацию для принятия взвешенных решений.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13d49423119043a5faf80dc1aa3a6681117acd96c7c91f1a3783b1f8e7e8fb37?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Обучение по комплаенсу",
      description:
        "Организация и проведение обучающих программ по противодействию коррупции, управлению конфликтом интересов, соблюдению санкционных режимов и требованиям ISO 37001. Формат и содержание адаптируются к специфике отрасли, что способствует повышению эффективности соблюдения норм и стандартов комплаенса.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f27d9b73831e5e94da69e597743c2bf87eeadc26d5b15f9aeac2f2f2a9c2dc15?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      title: "Профессиональная поддержка в расширении клиентской базы",
      description:
        "Анализ рынка и выявление новых возможностей для привлечения клиентов, консультирование по разработке стратегий роста и установлению партнёрств. Экспертиза команды включает комплексные решения для укрепления позиций на рынке и освоения перспективных направлений.",
    },
  ];

  return (
    <section className={styles.specializationsSection}>
      <h2 className={styles.specializationsTitle}>
        Мы специализируемся по следующим направлениям
      </h2>
      <div className={styles.specializationCards}>
        {specializationData.map((specialization, index) => (
          <SpecializationCard
            key={index}
            iconSrc={specialization.iconSrc}
            title={specialization.title}
            description={specialization.description}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Specializations;
