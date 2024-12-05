import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villa-info.module.scss";

export type VillaInfoType = {
  className?: string;
};

const VillaInfo: NextPage<VillaInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.villaInfo, className].join(" ")}>
      <div className={styles.villaTitle}>
        <div className={styles.locationDetails}>
          <div className={styles.villaLocation}>
            <div className={styles.location}>
              <h1 className={styles.seaLaVie}>Sea La Vie</h1>
              <h3 className={styles.alibaugMaharashtra}>
                Alibaug, Maharashtra
              </h3>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <Image
                className={styles.xIcon}
                width={14}
                height={20}
                alt=""
                src="/x-1.svg"
              />
              <div className={styles.sliderNavigation}>
                <Image
                  className={styles.seriesIcon}
                  width={66}
                  height={12}
                  alt=""
                  src="/series-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <Image
            className={styles.frameItem}
            width={130}
            height={130}
            alt=""
            src="/rectangle-4393@2x.png"
          />
          <div className={styles.placeholder} />
          <b className={styles.placeholderLabel}>+12</b>
        </div>
      </div>
    </div>
  );
};

export default VillaInfo;
