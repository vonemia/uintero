import React from "react";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";

function BlogGrid() {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "10.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "8.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "10.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "8.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "10.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "8.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 10,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "12.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 11,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "10.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
    {
      id: 12,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00803608d22732ce35db461fd0dbb86a2c97315f8e4e35a07d786a335a1ceae7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
      date: "8.02.2025",
      title: "Мировые и локальные тенденции сектора финансовых технологий",
      description:
        "Мы расширили доступ к актуальным базам данных и обновили алгоритмы проверки. Теперь ваш бизнес защищен ещё лучше – анализ по 50+ критериям стал ещё точнее и быстрее!",
    },
  ];

  // Function to get the appropriate class name for each card based on its position
  const getCardClassName = (index) => {
    const row = Math.floor(index / 3);
    const cardClasses = [
      styles.news2,
      styles.news4,
      styles.news6,
      styles.news9,
      styles.news11,
      styles.news13,
      styles.news16,
      styles.news18,
      styles.news20,
      styles.news23,
      styles.news25,
      styles.news27,
    ];

    return cardClasses[index];
  };

  // Group posts into rows of 3
  const rows = [];
  for (let i = 0; i < blogPosts.length; i += 3) {
    rows.push(blogPosts.slice(i, i + 3));
  }

  return (
    <section className={styles.div3}>
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={
            rowIndex === 0
              ? styles.news
              : rowIndex === 1
              ? styles.news8
              : rowIndex === 2
              ? styles.news15
              : styles.news22
          }
        >
          {row.map((post, index) => (
            <BlogCard
              key={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
              className={getCardClassName(rowIndex * 3 + index)}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default BlogGrid;
