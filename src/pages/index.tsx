import type { NextPage } from "next";
import Image from "next/image";
import Content from "../components/content";
import VillaInfo from "../components/villa-info";
import VillaContent from "../components/villa-content";
import FrameComponent from "../components/frame-component";
import GroupComponent1 from "../components/group-component1";
import GroupComponent2 from "../components/group-component2";
import styles from "./index.module.scss";
import GroupComponent from "@/components/group-component";
import { SetStateAction, useEffect, useState } from "react";

const ListingPage: NextPage = () => {
  const images = ["/image@2x.png", "/image@2x.png", "/image@2x.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.listingPage}>
        <div className={styles.imageIcon}>
          <div className={styles.carouselContainer}>
            <div
              className={styles.imageWrapper}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index}`}
                  className={styles.image}
                />
              ))}
            </div>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
              <span>
                <Image width={10} height={30} alt="" src="/line.svg" />
              </span>
              <span>
                <Image
                  style={{ position: "relative", left: "-15px" }}
                  width={50}
                  height={50}
                  layout="intrinsic"
                  alt=""
                  src="/group-146148.svg"
                />
              </span>
            </div>
          </div>
        </div>

        <Image
          className={styles.groupIcon}
          width={12}
          height={8}
          alt=""
          src="/group.svg"
        />
        <header className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.logIn}>Log in / Register</div>
            <div className={styles.frameParent}>
              <div className={styles.exploreIdeasParent}>
                <div className={styles.exploreIdeas}>Explore Ideas</div>
                <div className={styles.arrowDownSignToNavigate1}>
                  <Image
                    className={styles.groupIcon1}
                    width={8}
                    height={5}
                    alt=""
                    src="/group1.svg"
                  />
                </div>
              </div>
              <div className={styles.exploreIdeas}>For Home Owners</div>
            </div>
          </div>
          <Image
            className={styles.frameChild1}
            width={219}
            height={42}
            alt=""
            src="/group-3050.svg"
          />
          <Image
            className={styles.frameChild2}
            width={392}
            height={90}
            alt=""
            src="/group-3489.svg"
          />
          <div className={styles.lineDiv} />
        </header>
        <Content />
        <div className={styles.listingPageChild} />
        <main className={styles.main}>
          <section className={styles.villaDetails}>
            <VillaInfo />
            <VillaContent />
            <FrameComponent
              cards={[
                <GroupComponent
                  key={1}
                  rectangle3181="/rectangle-3181-1@2x.png"
                />,
                <GroupComponent
                  key={2}
                  rectangle3181="/rectangle-3181-1@2x.png"
                />,
                <GroupComponent
                  key={3}
                  rectangle3181="/rectangle-3181-1@2x.png"
                />,
                <GroupComponent
                  key={4}
                  rectangle3181="/rectangle-3181-1@2x.png"
                />,
                <GroupComponent
                  key={5}
                  rectangle3181="/rectangle-3181-1@2x.png"
                />,
              ]}
            />
            <div className={styles.locationParent}>
              <h2 className={styles.location}>Location</h2>
              <div className={styles.locationImageContainer}>
                <Image
                  className={styles.image9Icon}
                  width={797}
                  height={232}
                  alt=""
                  src="/image-9@2x.png"
                />
                <button className={styles.secondaryButton}>
                  <div className={styles.getDirection}>Get Direction</div>
                </button>
              </div>
            </div>
            <div className={styles.roomsBedsParent}>
              <h2 className={styles.location}>{`Rooms & Beds`}</h2>
              <div className={styles.roomCards}>
                <FrameComponent
                  cards={[
                    <GroupComponent1
                      key={6}
                      roomCardBackground="/rectangle-3181-3@2x.png"
                    />,
                    <GroupComponent1
                      key={7}
                      roomCardBackground="/rectangle-3181-3@2x.png"
                    />,
                    <GroupComponent1
                      key={8}
                      roomCardBackground="/rectangle-3181-3@2x.png"
                    />,
                    <GroupComponent1
                      key={9}
                      roomCardBackground="/rectangle-3181-3@2x.png"
                    />,
                  ]}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <GroupComponent2 />
    </>
  );
};

export default ListingPage;
