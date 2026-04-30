'use client';
import React from 'react';
import styles from './InvestorsSection.module.scss';

const partnerLogos = [
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/Microvest.svg', alt: 'Microvest partner logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/Musonibv.svg', alt: 'Musoni BV partner logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/image-9.svg', alt: 'Partner organization logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/mastercard-foundation-1.svg', alt: 'Mastercard Foundation logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/inspiring-development_logo.svg', alt: 'Inspiring Development logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/mce-logo-color-hor.svg', alt: 'MCE Social Capital logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/grameen.svg', alt: 'Grameen Foundation logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/regmifa.svg', alt: 'RegMIFA fund logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/NMI.svg', alt: 'NMI partner logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/HIVOS-2.svg', alt: 'HIVOS organization logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/AGF.svg', alt: 'AGF fund logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/USAID.svg', alt: 'USAID logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/kfw.svg', alt: 'KfW development bank logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/ALCB-Fund.svg', alt: 'ALCB Fund logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/02/Alterfin.svg', alt: 'Alterfin cooperative logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/WPF.svg', alt: 'WPF partner logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/3-sima-main-logo-no-bkgrnd.svg', alt: 'SIMA Funds logo' },
  { src: 'https://musoni.co.ke/wp-content/uploads/2025/04/FEFISOL.svg', alt: 'FEFISOL fund logo' },
];

export default function InvestorsSection() {
  const rows = [
    partnerLogos?.slice(0, 6),
    partnerLogos?.slice(6, 12),
    partnerLogos?.slice(12, 18),
  ];

  return (
    <section className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.card}>
          <div className={styles?.row}>
            <div className={styles?.logoGrid}>
              {rows?.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`${styles?.logoRow} ${rowIdx < rows?.length - 1 ? styles?.bordered : ''}`}
                >
                  {row?.map((logo) => (
                    <div key={logo?.alt} className={styles?.logoItem}>
                      <img src={logo?.src} alt={logo?.alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles?.textCol}>
              <h2 className={styles?.heading}>Our Investors &amp; Partners</h2>
              <p className={styles?.body}>
                Join a network of investors and financial institutions shaping Africa&apos;s future.
              </p>
              <a
                href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20your%20to%20become%20A%20Musonite."
                target="_blank"
                rel="noopener noreferrer"
                className={styles?.cta}
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
