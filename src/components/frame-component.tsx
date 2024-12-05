import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "./frame-component.module.scss";

export type FrameComponentType = {
  className?: string;
  cards?: any[];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  cards = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [itemWidth, setItemWidth] = useState(300);

  const items = cards;

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width > 1200) {
        setItemsToShow(3);
        setItemWidth(300);
      } else if (width > 768) {
        setItemsToShow(2.5);
        setItemWidth(300);
      } else {
        setItemsToShow(1.5);
        setItemWidth(300);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = Math.max(0, Math.ceil((items?.length ?? 0) - itemsToShow));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.carouselContainer}>
        <button className={styles.navArrow} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselInner}
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${(items?.length ?? 0) * itemWidth}px`,
            }}
          >
            {items?.map((item, index) => (
              <div
                key={index}
                className={styles.carouselItem}
                style={{ width: `${itemWidth}px` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <button className={styles.navArrow} onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className={styles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FrameComponent;
