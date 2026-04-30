'use client';
import React from 'react';
import styles from './MicrofinanceSection.module.scss';

export default function MicrofinanceSection() {
  return (
    <section id="findoutmore" className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.row}>
          <div className={styles?.textCol}>
            <h2 className={styles?.heading}>
              From Microfinance to
              <br />
              Venture Financing in Africa
            </h2>
            <p className={styles?.body}>
              For over a decade, Musoni has played a pivotal role in Africa&apos;s financial sector, pioneering cashless and paperless microfinance to empower entrepreneurs and small businesses. With a strong foundation in financial inclusion, we have now expanded our focus to venture financing, bridging the gap between capital and Africa&apos;s high-growth enterprises.
            </p>
            <a href="#" className={styles?.cta}>
              See How
            </a>
          </div>
          <div className={styles?.imageCol}>
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_11959f411-1763294023945.png"
              alt="Musoni microfinance woman entrepreneur"
              className={styles?.image} />

          </div>
        </div>
      </div>
    </section>);

}