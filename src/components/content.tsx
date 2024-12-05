import type { NextPage } from "next";
import Image from "next/image";
import styles from "./content.module.scss";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.contentChild} />
      <div className={styles.phoneIcons}>
        <Image
          loading="lazy"
          width={40}
          height={40}
          alt=""
          src="/group-1461681.svg"
        />
        <Image
          loading="lazy"
          width={40}
          height={40}
          alt=""
          src="/group-1461682.svg"
        />
      </div>
      <div className={styles.navigationParent}>
        <div className={styles.navigation}>
          <div className={styles.navOptions}>
            <Image
              className={styles.xIcon}
              loading="lazy"
              width={30}
              height={43}
              alt=""
              src="/x.svg"
            />
            <div className={styles.navSeries}>
              <Image
                className={styles.seriesIcon}
                loading="lazy"
                width={144}
                height={26}
                alt=""
                src="/series.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.searchBar}>
            <Image
              className={styles.groupIcon}
              width={16}
              height={16}
              alt=""
              src="/group-1@2x.png"
            />
          </div>
          <div className={styles.searchForLocation}>
            search for location, villa, facilities...
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoContainerParent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logoIcon}
                loading="lazy"
                width={26}
                height={24}
                alt=""
                src="/logo.svg"
              />
              <div className={styles.brandName}>
                <div className={styles.saffronstays}>SaffronStays</div>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.phoneIconParent}>
              <div className={styles.phoneIcon}>
                <Image
                  className={styles.phoneCall1Icon}
                  width={16}
                  height={16}
                  alt=""
                  src="/phonecall-1.svg"
                />
              </div>
              <div className={styles.phoneLabel}>08069160000</div>
            </div>
          </div>
          <button className={styles.auth}>
            <a className={styles.login}>Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
