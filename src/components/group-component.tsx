import type { NextPage } from "next";
import Image from "next/image";
import styles from "./group-component.module.scss";

export type GroupComponentType = {
  className?: string;
  rectangle3181: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  rectangle3181,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <Image
        className={styles.frameItem}
        width={260}
        height={323}
        alt=""
        src={rectangle3181}
      />
      <div className={styles.vinayParent}>
        <div className={styles.vinay}>Vinay</div>
        <div className={styles.ellipseWrapper}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.sep032023}>Sep 03, 2023</div>
      </div>
    </div>
  );
};

export default GroupComponent;
