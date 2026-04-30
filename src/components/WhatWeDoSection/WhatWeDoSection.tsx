'use client';
import React from 'react';
import styles from './WhatWeDoSection.module.scss';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}

const services: ServiceCard[] = [
{
  title: 'Venture Financing',
  description: 'Scalable funding for high-growth African businesses.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f77d279c-1773451562091.png",
  alt: 'Business professionals shaking hands over a venture financing deal',
  tag: 'Funding'
},
{
  title: 'Growth & Expansion Loans',
  description: 'Supporting African enterprises looking to scale operations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18804418b-1772304916534.png",
  alt: 'Entrepreneur reviewing growth charts and expansion plans',
  tag: 'Loans'
},
{
  title: 'Agribusiness Financing',
  description: "Fueling Africa's food security through smart investments.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_146535ed4-1773142300476.png",
  alt: 'African farmer working in a green agricultural field',
  tag: 'Agriculture'
},
{
  title: 'Trade & Asset Financing',
  description: 'Unlocking capital for businesses needing liquidity or equipment.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eee56098-1772169617074.png",
  alt: 'Business person reviewing trade finance documents at a desk',
  tag: 'Trade'
},
{
  title: 'Impact & Sustainable Finance',
  description: 'Funding ventures with a strong economic and social footprint.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_100f6550f-1772643858459.png",
  alt: 'Solar panels in an African landscape representing sustainable finance',
  tag: 'Impact'
}];


function ServiceCardItem({ service }: {service: ServiceCard;}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={service.image} alt={service.alt} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardTag}>{service.tag}</span>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
        <a href="#" className={styles.cardCta}>
          Apply Now →
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
          {services.map((service) =>
          <ServiceCardItem key={service.title} service={service} />
          )}
        </div>
        <div className={styles.infoBox}>
          <p>
            Our goal is to bridge the capital gap by offering smart, scalable financial products tailored for businesses at every stage—from small enterprises to rapidly expanding companies.
          </p>
        </div>
      </div>
    </section>);

}