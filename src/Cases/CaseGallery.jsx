import React from "react";
import styles from "./Cases.module.css";
import CaseRow from "./CaseRow";

function CaseGallery() {
  const firstRowImages = {
    image1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20f6eec4394d61228f3cd0e82c2ab6871e0209993287c5cdb581ff993f55e3b8?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    image2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ce87799cea6214b89566d3132b8e99b19da3214dd36b8dd77982e76d026276e5?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    image3:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/33371a7a787b3752b5c27377778df99c254b9843a9ddfe61168ff9320ba4d704?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    overlayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F99ab08febfcc452c8fe9a36a7cf4a377%2F758bc286ae464af58d726cd734c35be5",
  };

  const secondRowImages = {
    image1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20f6eec4394d61228f3cd0e82c2ab6871e0209993287c5cdb581ff993f55e3b8?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    image2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ce87799cea6214b89566d3132b8e99b19da3214dd36b8dd77982e76d026276e5?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    image3:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/33371a7a787b3752b5c27377778df99c254b9843a9ddfe61168ff9320ba4d704?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
    overlayImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07cb20f037812c0b8e31a7c711696b43ddcb82e5c24536ed0da489369e997956?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377",
  };

  return (
    <section className={styles.div}>
      <h1 className={styles.pageTitle}>Кейсы</h1>
      <CaseRow
        images={firstRowImages}
        className={styles.autoLayoutHorizontal4}
      />
      <CaseRow
        images={secondRowImages}
        className={styles.autoLayoutHorizontal5}
      />
    </section>
  );
}

export default CaseGallery;
