'use client';
import React from 'react';
import styles from './GetInTouchSection.module.scss';

export default function GetInTouchSection() {
  return (
    <section className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.row}>
          <div className={styles?.headingCol}>
            <h2 className={styles?.heading}>Get in Touch</h2>
          </div>
          <div className={styles?.socialCol}>
            <a
              href="https://www.instagram.com/musoni_microfinance/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              href="https://x.com/MusoniKenya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="X (Twitter)"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/8738615/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin-square" />
            </a>
            <a
              href="https://www.facebook.com/musoni.kenya/about"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="Facebook"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@musoni_microfinance"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="TikTok"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@musonimicrofinance6395"
              target="_blank"
              rel="noopener noreferrer"
              className={styles?.socialLink}
              aria-label="YouTube"
            >
              <i className="fa fa-youtube-play" />
            </a>
          </div>
          <div className={styles?.ctaCol}>
            <a href="mailto:info@musoni.co.ke" className={styles?.btnEmail}>
              Email Us
            </a>
            <button className={styles?.btnCall}>Call Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
