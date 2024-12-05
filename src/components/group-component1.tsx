import type { NextPage } from "next";
import Image from "next/image";
import styles from "./group-component1.module.scss";

export type GroupComponent1Type = {
  className?: string;
  roomCardBackground: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  roomCardBackground,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <Image
        className={styles.roomCardBackground}
        width={299}
        height={184}
        alt=""
        src={roomCardBackground}
      />
      <div className={styles.roomDescriptionContainer}>
        <div className={styles.tuckedAwayCosilyContainer}>
          <ul className={styles.tuckedAwayCosilyInTheLap}>
            <li className={styles.tuckedAwayCosily}>
              Tucked away cosily in the lap of nature, this is the perfect
              destination getaway
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.tuckedAwayCosilyInTheLap}>
            <li>
              The tourist-favourite Bhimtal Lake is only a stone’s throw away.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
