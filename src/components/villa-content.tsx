import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villa-content.module.scss";

export type VillaContentType = {
  className?: string;
};

const VillaContent: NextPage<VillaContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.villaContent, className].join(" ")}>
      <div className={styles.ratingAndDetailsParent}>
        {/* <div className={styles.ratingAndDetails}>
          <Image
            className={styles.ratingAndDetailsChild}
            loading="lazy"
            width={174}
            height={44}
            alt=""
            src="/group-146149.svg"
          />
        </div> */}
        <div className={styles.details}>
          <div className={styles.villaType}>
            <div className={styles.villaAttributes}>
              <div className={styles.attributeRow}>
                <div className={styles.starsContainerParent}>
                  <div className={styles.starsContainer}>
                    <div className={styles.starIcon}>
                      <Image
                        className={styles.star1Icon}
                        loading="lazy"
                        width={21}
                        height={21}
                        alt=""
                        src="/star-1.svg"
                      />
                    </div>
                    <div className={styles.starRating}>
                      <b className={styles.ratingValue}>4.5</b>
                      <div className={styles.ratingScale}>
                        <b className={styles.ratingValue}>/ 5</b>
                      </div>
                    </div>
                    <div className={styles.separator}>
                      <div className={styles.separatorChild} />
                    </div>
                    <div className={styles.ratingScale}>
                      <div className={styles.reviews1}>105 reviews</div>
                    </div>
                  </div>
                  <div className={styles.summaryParent}>
                    <button className={styles.summary}>
                      <div className={styles.summaryIcons}>
                        <Image
                          className={styles.houseSvgrepoCom32Icon}
                          width={18}
                          height={18}
                          alt=""
                          src="/housesvgrepocom3-2.svg"
                        />
                      </div>
                      <div className={styles.entireVilla}>Entire Villa</div>
                    </button>
                    <div className={styles.summary1}>
                      <div className={styles.summaryChild} />
                    </div>
                    <button className={styles.summary2}>
                      <div className={styles.summaryInner}>
                        <Image
                          className={styles.frameChild}
                          width={18}
                          height={15}
                          alt=""
                          src="/group-19489.svg"
                        />
                      </div>
                      <div className={styles.guests}>{`6-12 Guests `}</div>
                    </button>
                    <div className={styles.summary1}>
                      <div className={styles.summaryChild} />
                    </div>
                    <button className={styles.summary4}>
                      <div className={styles.bed2Wrapper}>
                        <Image
                          className={styles.houseSvgrepoCom32Icon}
                          width={18}
                          height={18}
                          alt=""
                          src="/bed-2.svg"
                        />
                      </div>
                      <div className={styles.entireVilla}>8 Bedrooms</div>
                    </button>
                    <div className={styles.summary5}>
                      <div className={styles.summaryChild} />
                    </div>
                    <button className={styles.summary6}>
                      <div className={styles.bed2Wrapper}>
                        <Image
                          className={styles.pawOutlineSvgrepoCom3Icon}
                          width={19}
                          height={19}
                          alt=""
                          src="/pawoutlinesvgrepocom-3.svg"
                        />
                      </div>
                      <div className={styles.petFriendly}>Pet-Friendly</div>
                    </button>
                  </div>
                </div>
                <h2 className={styles.about}>About</h2>
              </div>
            </div>
            <div className={styles.features}>
              <Image
                className={styles.featuresChild}
                loading="lazy"
                width={40}
                height={40}
                alt=""
                src="/group-146155.svg"
              />
              <Image
                className={styles.featuresChild}
                loading="lazy"
                width={40}
                height={40}
                alt=""
                src="/group-146156.svg"
              />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.tuckedAwayCosilyContainer}>
              <ul className={styles.tuckedAwayCosilyInTheLap}>
                <li className={styles.tuckedAwayCosilyInTheLap1}>
                  <span>
                    <span>
                      Tucked away cosily in the lap of nature, this is the
                      perfect destination getaway for a vacation trip near Delhi
                      and Chandigarh.
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      The tourist-favourite Bhimtal Lake is only a stone’s throw
                      away.
                    </span>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.readMore}>Read more</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.buttonList}>
              <button className={styles.secondaryButton}>
                <div className={styles.houseRules}>House Rules</div>
              </button>
              <button className={styles.secondaryButton1}>
                <div className={styles.cancellationPolicy}>
                  Cancellation Policy
                </div>
              </button>
              <button className={styles.secondaryButton1}>
                <div className={styles.thingsYouNeed}>
                  Things you need to know
                </div>
              </button>
              <button className={styles.secondaryButton1}>
                <div className={styles.thingsYouNeed}>Things to do</div>
              </button>
            </div>
            <div className={styles.amenitiesParent}>
              <h2 className={styles.amenities}>Amenities</h2>
              <div className={styles.amenityList}>
                <div className={styles.amenities1}>
                  <div className={styles.features}>
                    <div className={styles.iconAndLabel}>
                      <Image
                        className={styles.star1Icon}
                        width={21}
                        height={21}
                        alt=""
                        src="/bed-2-1.svg"
                      />
                      <Image
                        className={styles.star1Icon}
                        loading="lazy"
                        width={21}
                        height={21}
                        alt=""
                        src="/parkingsvgrepocom-1.svg"
                      />
                    </div>
                    <div className={styles.bedroomsParent}>
                      <div className={styles.bedrooms1}>4 Bedrooms</div>
                      <div className={styles.freeParking}>Free parking</div>
                    </div>
                  </div>
                  <div className={styles.moreAmenities}>
                    <div className={styles.showMore}>
                      <div className={styles.showMoreButton}>
                        <Image
                          className={styles.showMoreButtonChild}
                          loading="lazy"
                          width={19}
                          height={16}
                          alt=""
                          src="/group-19487.svg"
                        />
                        <Image
                          className={styles.star1Icon}
                          loading="lazy"
                          width={21}
                          height={21}
                          alt=""
                          src="/airconditionersvgrepocom-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.showMoreLabel}>
                      <div className={styles.ratingValue}>12 Guests</div>
                      <div className={styles.airConditioning}>
                        Air conditioning
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mealOptionsParent}>
                  <div className={styles.mealOptions}>
                    <div className={styles.features}>
                      <Image
                        className={styles.bed2Icon2}
                        width={21}
                        height={21}
                        alt=""
                        src="/bed-2-1.svg"
                      />
                      <div className={styles.bedrooms1}>4 Bedrooms</div>
                    </div>
                    <div className={styles.viewAllButton}>
                      <button className={styles.secondaryButton4}>
                        <div className={styles.viewAllAmenities}>
                          View all Amenities
                        </div>
                      </button>
                    </div>
                    <h2 className={styles.about}>Meals</h2>
                  </div>
                  <div className={styles.mealGuestsContainer}>
                    <div className={styles.mealGuestsContainerInner}>
                      <Image
                        className={styles.showMoreButtonChild}
                        width={19}
                        height={16}
                        alt=""
                        src="/group-19487-1.svg"
                      />
                    </div>
                    <div className={styles.guests2}>12 Guests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cookDescription}>
            <div className={styles.tuckedAwayCosilyContainer}>
              A cook is available to prepare local specialities and a delicious
              spread of home-cooked meals all day, at an additional charge
            </div>
          </div>
          <div className={styles.mealPreferencesContainer}>
            <div className={styles.mealPreferenceOptions}>
              <div className={styles.mealPreferenceButtons}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.mealPreferenceButtonBackgro} />
                </div>
                <div className={styles.veg}>Veg</div>
              </div>
              <div className={styles.mealPreferenceButtons}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.veg}>Non Veg</div>
              </div>
            </div>
            <div className={styles.mealMenuButtons}>
              <div className={styles.secondaryButton5}>
                <div className={styles.viewMenu}>View Menu</div>
              </div>
              <button className={styles.secondaryButton4}>
                <div className={styles.mealRateCard}>Meal Rate Card</div>
              </button>
            </div>
          </div>
        </div>
        <h2 className={styles.about}>Real Moments</h2>
      </div>
      <div className={styles.villaContentInner}>
        <form className={styles.rectangleContainer}>
          <div className={styles.frameChild2} />
          <div className={styles.pricePerNightContainer}>
            <div className={styles.priceSymbolContainer}>
              <div className={styles.div}>₹1,49,086</div>
            </div>
            <div className={styles.night}>
              <b className={styles.b}>₹1,00,086</b>
              <span className={styles.night1}>/Night</span>
            </div>
          </div>
          <div className={styles.bookingElements}>
            <div className={styles.bookingElementBackground} />
            <div className={styles.groupDiv}>
              <div className={styles.frameChild3} />
              <div className={styles.bed2Wrapper}>
                <div className={styles.specialDiscountsAvailable}>
                  Special discounts available!!
                </div>
              </div>
              <div className={styles.checkInOutGuestsContainer}>
                <div className={styles.checkInOutGuestsContainerChild} />
                <div className={styles.unlockPrice}>Unlock Price</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild4} />
            <div className={styles.frameParent}>
              <div className={styles.bed2Wrapper}>
                <Image
                  className={styles.groupIcon}
                  width={16}
                  height={18}
                  alt=""
                  src="/group-2.svg"
                />
              </div>
              <input
                className={styles.checkIn}
                placeholder="Check in - Check out"
                type="text"
              />
            </div>
            <Image
              className={styles.frameChild5}
              width={10}
              height={22}
              alt=""
              src="/group-25.svg"
            />
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild4} />
            <div className={styles.frameGroup}>
              <div className={styles.separator}>
                <Image
                  className={styles.linealExpandedIcon}
                  width={17}
                  height={16}
                  alt=""
                  src="/lineal-expanded.svg"
                />
              </div>
              <div className={styles.guests3}>2 Guests</div>
            </div>
            <Image
              className={styles.frameChild5}
              width={10}
              height={22}
              alt=""
              src="/group-25-1.svg"
            />
          </div>
          <button className={styles.groupButton}>
            <div className={styles.frameChild8} />
            <div className={styles.checkAvailability}>Check Availability</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VillaContent;
