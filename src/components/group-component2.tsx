import type { NextPage } from "next";
import Image from "next/image";
import styles from "./group-component2.module.scss";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.footerDivider} />
      <div className={styles.footerContent}>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinks}>
            <div className={styles.icon}>
              <Image
                className={styles.frameInner}
                loading="lazy"
                width={163}
                height={54}
                alt=""
                src="/group-3494.svg"
              />
            </div>

            <div className={styles.companySection}>
              <div className={styles.sectionTitle}>Company</div>
              <div className={styles.companyItem}>SaffronStays</div>
              <div className={styles.companyItem}>Signature</div>
              <div className={styles.companyItem}>XSeries</div>
              <div className={styles.companyItem}>About</div>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.sectionTitle}>Contact</div>
              <a
                className={styles.contactItem}
                href="mailto:mail@saffronstays.com"
                target="_blank"
              >
                mail@saffronstays.com
              </a>
              <div className={styles.contactItem}>+91 3728253727</div>
            </div>

            <div className={styles.partnerSection}>
              <div className={styles.sectionTitle}>Partner with us</div>
              <div className={styles.partnerItem}>List a home</div>
            </div>

            <div className={styles.policiesSection}>
              <div className={styles.sectionTitle}>Policies</div>
              <div className={styles.policyItem}>Privacy Policy</div>
              <div className={styles.policyItem}>Terms</div>
              <div className={styles.policyItem}>Sitemap</div>
              <div className={styles.policyItem}>Cancellation Policy</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.copyrightContainer}>
          <div className={styles.saffronstays}>
            © 2021 SaffronStays. All rights reserved
          </div>
        </div>
        <div>
          <Image
            className={styles.frameInner}
            loading="lazy"
            width={168}
            height={24}
            alt=""
            src="/group-2606.svg"
          />
        </div>
      </div>

      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <span className={styles.originalPrice}>₹1,49,086</span>
          <div className={styles.discountedPriceWrapper}>
            <span className={styles.discountedPrice}>₹1,00,086</span>
            <span className={styles.perNight}>/night</span>
          </div>
        </div>
        <button className={styles.availabilityButton}>
          Check Availability
        </button>
      </div>
    </footer>
  );
};

export default GroupComponent2;
