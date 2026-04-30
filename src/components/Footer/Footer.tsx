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
