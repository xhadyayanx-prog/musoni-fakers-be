'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles?.footer}>
      <div className={styles?.main}>
        <div className={styles?.topRow}>
          {/* Logo + Tagline */}
          <div className={styles?.brandCol}>
            <Link href="/">
              <img
                src="/assets/images/rwamps-finance-logo-1777582477534.png"
                alt="Musoni Capital Limited"
                className={styles?.logo} />
            </Link>
            <p className={styles?.tagline}>
              Empowering Africa&apos;s financial future through technology-driven microfinance.
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles?.contactCol}>
            <p className={styles?.colTitle}>Get In Touch</p>
            <div className={styles?.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles?.contactIcon}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Cape Office Park, Ring Road Kilimani<br />P.O. Box 25351 - 00100, Nairobi, Kenya</span>
            </div>
            <div className={styles?.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles?.contactIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.05 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>0709 761 101</span>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles?.socialCol}>
            <p className={styles?.colTitle}>Follow Us</p>
            <div className={styles?.socialGrid}>
              <a href="https://x.com/MusoniKenya" target="_blank" rel="noopener noreferrer" className={styles?.socialCard} aria-label="X Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter / X</span>
              </a>
              <a href="https://www.facebook.com/musoni.kenya/about" target="_blank" rel="noopener noreferrer" className={styles?.socialCard} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.youtube.com/@musonimicrofinance6395" target="_blank" rel="noopener noreferrer" className={styles?.socialCard} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a7a32" />
                </svg>
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/musoni_microfinance/" target="_blank" rel="noopener noreferrer" className={styles?.socialCard} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@musoni_microfinance" target="_blank" rel="noopener noreferrer" className={styles?.socialCard} aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles?.disclaimerBar}>
          <p className={styles?.disclaimer}>
            Musoni Capital Limited is licensed by the Central Bank of Kenya as a Digital Credit Provider.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles?.copyright}>
        <div className={styles?.copyrightInner}>
          <p className={styles?.copyrightText}>
            &copy; 2026 Musoni Capital Limited. All Rights Reserved
          </p>
          <p className={styles?.copyrightRight}>
            Regulated by the Central Bank of Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
