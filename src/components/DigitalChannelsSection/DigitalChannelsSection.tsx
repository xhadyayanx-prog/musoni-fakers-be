'use client';
import React from 'react';
import styles from './DigitalChannelsSection.module.scss';

export default function DigitalChannelsSection() {
  return (
    <section className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.card}>
          <div className={styles?.row}>
            <div className={styles?.textCol}>
              <h2 className={styles?.heading}>Our Digital Channels</h2>
              <p className={styles?.body}>
                Access Musoni&apos;s financial services anytime, anywhere with our seamless digital channels—fast, secure, and built to keep your business moving forward!
              </p>
              <div className={styles?.storeButtons}>
                <a href="#" className={styles?.storeBtn}>
                  <img
                    src="https://musoni.co.ke/wp-content/uploads/2025/03/1200px-Google_Play_Store_badge_EN.svg.svg"
                    alt="Get it on Google Play"
                  />
                </a>
                <a href="#" className={styles?.storeBtn}>
                  <img
                    src="https://musoni.co.ke/wp-content/uploads/2025/03/Download_on_the_App_Store_RGB_blk.svg-2.svg"
                    alt="Download on the App Store"
                  />
                </a>
                <a
                  href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20your%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles?.storeBtn}
                >
                  <img
                    src="https://musoni.co.ke/wp-content/uploads/2025/03/whatsapp-logo-full-2.svg"
                    alt="Chat on WhatsApp"
                  />
                </a>
              </div>
            </div>
            <div className={styles?.imageCol}>
              <img
                src="https://musoni.co.ke/wp-content/uploads/2025/03/pretty-young-african-lady-holding-her-phone-feeling-excited-2-1.svg"
                alt="Young African woman holding phone excited about digital financial services"
                className={styles?.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
