'use client';
import React from 'react';
import styles from './WhatWeDoSection.module.scss';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  bgImage: string;
  bgColor: string;
}

const services: ServiceCard[] = [
{
  title: 'Venture Financing',
  description: 'Scalable funding for high-growth African businesses.',
  icon: 'https://musoni.co.ke/wp-content/uploads/2025/02/Venture_Financing_Icons.svg',
  bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1acd53e10-1773052365157.png",
  bgColor: '#041447'
},
{
  title: 'Growth & Expansion Loans',
  description: 'Supporting African enterprises looking to scale operations.',
  icon: 'https://musoni.co.ke/wp-content/uploads/2025/03/Trending_Up.svg',
  bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1acd53e10-1773052365157.png",
  bgColor: '#041447'
},
{
  title: 'Agribusiness Financing',
  description: "Fueling Africa's food security through smart investments.",
  icon: 'https://musoni.co.ke/wp-content/uploads/2025/02/Vector.svg',
  bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12112a0d3-1776155105196.png",
  bgColor: '#041447'
},
{
  title: 'Trade & Asset Financing',
  description: 'Unlocking capital for businesses needing liquidity or equipment.',
  icon: 'https://musoni.co.ke/wp-content/uploads/2025/02/Trade-Asset-Financing-Icon.svg',
  bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_153df17cb-1777581410962.png",
  bgColor: '#041447'
},
{
  title: 'Impact & Sustainable Finance',
  description: 'Funding ventures with a strong economic and social footprint.',
  icon: 'https://musoni.co.ke/wp-content/uploads/2025/02/Impac-Sustainable-Finance-Icon.svg',
  bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1df144124-1777581411371.png",
  bgColor: '#041447'
}];


function ServiceCardItem({ service }: {service: ServiceCard;}) {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url('${service.bgImage}')` }} />

      <div className={styles.cardContent}>
        <img src={service.icon} alt={service.title} className={styles.cardIcon} />
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
        <a href="#" className={styles.cardCta}>
          Apply Now
        </a>
      </div>
    </div>);

}

export default function WhatWeDoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What we do</h2>
          <p className={styles.subheading}>
            Discover Musoni&apos;s innovative financial solutions, designed to drive growth, empower entrepreneurs, and create lasting financial stability!
          </p>
        </div>
        <div className={styles.grid}>
          {services.slice(0, 4).map((service) =>
          <ServiceCardItem key={service.title} service={service} />
          )}
        </div>
        <div className={styles.gridBottom}>
          <ServiceCardItem service={services[4]} />
          <div className={styles.infoBox}>
            <p>
              Our goal is to bridge the capital gap by offering smart, scalable financial products tailored for businesses at every stage—from small enterprises to rapidly expanding companies.
            </p>
          </div>
        </div>
      </div>
    </section>);

}