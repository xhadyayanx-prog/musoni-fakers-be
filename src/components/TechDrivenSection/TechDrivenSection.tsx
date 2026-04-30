'use client';
import React from 'react';
import styles from './TechDrivenSection.module.scss';

export default function TechDrivenSection() {
  return (
    <section className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.row}>
          <div className={styles?.textCol}>
            <h2 className={styles?.heading}>Tech-Driven Finance</h2>
            <p className={styles?.body}>
              By leveraging mobile money, real-time loan processing, and data-driven insights, Musoni streamlines lending and empower clients.
            </p>
            <p className={styles?.body}>
              Our technology fuels embedded financial services, enhancing access to financial services through a cutting-edge, data-driven approach, while enabling deeper feasibility of financial inclusion and social impact.
            </p>
            <a href="#" className={styles?.cta}>
              See How
            </a>
          </div>
          <div className={styles?.imageCol}>
            <img
              src="https://musoni.co.ke/wp-content/uploads/2025/03/Tech-Driven-Finance-3.gif"
              alt="Tech-Driven Finance illustration showing digital financial services"
              className={styles?.gif}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
