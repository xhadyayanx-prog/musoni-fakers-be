'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles?.footer}>
      <div className={styles?.main}>
        <div className={styles?.grid}>
          {/* Column 1: Logo + Address */}
          <div>
            <Link href="/">
              <img
                src="https://musoni.co.ke/wp-content/uploads/2025/02/Muson-Green-White-Logo.svg"
                alt="Musoni Capital Limited"
                className={styles?.logo}
              />
            </Link>
            <p className={styles?.companyName}>Musoni Capital Ltd</p>
            <p className={styles?.address}>
              Cape Office Park along
              <br />
              Ring Road Kilimani, Opp Yaya Centre
              <br />
              P.O. Box 25351 - 00100
              <br />
              Nairobi, Kenya
              <br />
              Tel: 0709761101
            </p>
            <p className={styles?.disclaimer}>
              Musoni Capital Limited is licensed by the Central Bank of Kenya as a Digital Credit Provider.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className={styles?.colTitle}>Quick Links</p>
            <div className={styles?.linkList}>
              <Link href="/company" className={styles?.link}>Company</Link>
              <Link href="/current-opportunities" className={styles?.link}>Current Opportunities</Link>
              <Link href="/contacts" className={styles?.link}>Contact Us</Link>
              <Link href="/contacts#faqs" className={styles?.link}>FAQs</Link>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className={styles?.colTitle}>Legal</p>
            <div className={styles?.linkList}>
              {['Disclaimer', 'Terms & Conditions', 'Licences', 'Privacy Policy', 'Data Policy']?.map(
                (item) => (
                  <span key={item} className={styles?.legalItem}>{item}</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className={styles?.copyright}>
        <div className={styles?.copyrightInner}>
          <p className={styles?.copyrightText}>
            &copy; 2026 Musoni Capital Limited. All Rights Reserved
          </p>
          <ul className={styles?.socialList}>
            <li>
              <a
                href="https://x.com/MusoniKenya"
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.socialLink}
                aria-label="X Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/musoni.kenya/about"
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.socialLink}
                aria-label="Facebook"
              >
                <i className="fa fa-linkedin" style={{ fontSize: '18px' }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@musonimicrofinance6395"
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.socialLink}
                aria-label="YouTube"
              >
                <i className="fa fa-youtube-play" style={{ fontSize: '18px' }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/musoni_microfinance/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.socialLink}
                aria-label="Instagram"
              >
                <i className="fa fa-instagram" style={{ fontSize: '18px' }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@musoni_microfinance"
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.socialLink}
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
