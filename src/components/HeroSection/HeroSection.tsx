'use client';
import React, { useEffect, useRef } from 'react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef?.current?.play()?.catch(() => {});
    }
  }, []);

  return (
    <section className={styles?.section}>
      <div className={styles?.bgLayer} />
      <video
        ref={videoRef}
        className={styles?.video}
        width="1800"
        height="700"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
      >
        <source
          src="https://musoni.co.ke/wp-content/uploads/2025/03/Musonis-Hero-Video.mov"
          type="video/mp4"
        />
      </video>
      <div className={styles?.overlay} />
      <div className={styles?.content}>
        <div className={styles?.inner}>
          <div className={styles?.textBlock}>
            <div className={styles?.textWrap}>
              <h1 className={styles?.heading}>
                <span className={styles?.headingWhite}>Financing </span>
                <span className={styles?.headingOrange}>Africa</span>
                <br />
                <span className={styles?.headingGreen}>
                  Transforming Lives &amp;
                  <br />
                  Unlocking Economic Growth
                </span>
              </h1>
              <p className={styles?.subheading}>
                Empowering entrepreneurs, businesses, and ventures across Africa with smart, scalable financing solutions.
              </p>
              <a href="#findoutmore" className={styles?.cta}>
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
