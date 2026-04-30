'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './OurImpactSection.module.scss';

interface MilestoneItem {
  number: string;
  symbol: string;
  label: string;
}

const milestones: MilestoneItem[] = [
  { number: '63', symbol: '%', label: 'Female Clients' },
  { number: '42', symbol: '%', label: 'Youth' },
  { number: '57', symbol: '%', label: 'Rural Outreach' },
  { number: '470', symbol: 'k', label: 'Household Impact' },
  { number: '278', symbol: 'k', label: 'PPI Surveys' },
  { number: '45', symbol: 'K +', label: 'Average Loan Size' },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function OurImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Impact</h2>
          <p className={styles.subheading}>
            &quot;At Musoni, our commitment to empowering businesses and driving economic transformation is reflected in our impact:&quot;
          </p>
        </div>
        <div className={styles.grid}>
          {milestones.map((m) => (
            <div key={m.label} className={styles.milestoneItem}>
              <div className={styles.numberRow}>
                <span className={styles.number}>
                  <CountUp target={parseInt(m.number)} />
                </span>
                <span className={styles.symbol}>{m.symbol}</span>
              </div>
              <p className={styles.label}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
