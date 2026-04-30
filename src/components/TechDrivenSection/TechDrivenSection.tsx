'use client';
import React from 'react';
import styles from './TechDrivenSection.module.scss';

const techImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c392243f-1772381256803.png",
  alt: "Mobile banking app on smartphone showing digital payment interface",
  label: "Mobile Money"
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b09aca67-1772313899728.png",
  alt: "Data analytics dashboard with financial charts and real-time metrics",
  label: "Data Insights"
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_15f47c5aa-1777583238548.png",
  alt: "Digital loan processing system with fast approval workflow",
  label: "Instant Loans"
}];


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
            <div className={styles?.imageGrid}>
              {techImages?.map((img, idx) =>
              <div key={idx} className={`${styles?.imageCard} ${idx === 0 ? styles?.imageLarge : styles?.imageSmall}`}>
                  <img src={img?.src} alt={img?.alt} className={styles?.cardImg} />
                  <div className={styles?.imageLabel}>
                    <span>{img?.label}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}