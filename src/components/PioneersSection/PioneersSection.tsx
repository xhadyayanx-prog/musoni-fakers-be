'use client';
import React from 'react';
import styles from './PioneersSection.module.scss';

interface AwardItem {
  title: string;
  description: string;
}

const awards: AwardItem[] = [
  {
    title: 'Mastercard Foundation Fund',
    description:
      'Recognized for scaling the Kilimo Booster loan, an agricultural financing product that supported thousands of farmers.',
  },
  {
    title: 'Oikocredit\nLeverage on Technology Award',
    description:
      'Awarded for innovation in digital financial services, ensuring seamless access to capital.',
  },
  {
    title: 'Microfinance Best Practice',
    description:
      'Earned "Excellent Status" in Appropriate Product Design & Delivery from the Smart Campaign.',
  },
];

export default function PioneersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>
              Pioneers in Financial Inclusion, Now Driving Africa&apos;s Economic Growth
            </h2>
            <p className={styles.body}>
              Musoni has been at the forefront of digital and cashless finance, ensuring accessible and efficient lending for entrepreneurs and businesses. Our track record in financial inclusion has now positioned us as a key enabler of venture financing for Africa&apos;s next wave of growth.
            </p>
          </div>
          <div className={styles.awardsCol}>
            {awards.map((award) => (
              <div key={award.title} className="award-card">
                <div className="award-label">
                  {award.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < award.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
                <div className="award-desc">
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
