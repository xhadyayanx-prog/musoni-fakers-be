'use client';
import React, { useState } from 'react';
import styles from './TestimonialsSection.module.scss';

interface Testimonial {
  quote: string;
  author: string;
  image: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Musoni's investment helped our agribusiness scale production by 300% in just 2 years",
    author: 'John Kamau, Founder, GreenHarvest Africa',
    image: 'https://musoni.co.ke/wp-content/uploads/2025/03/environment-smile-portrait-man-farm-sustainability-agriculture-nature-ecology-happy-peace-sunset-with-face-male-farmer-countryside-field-summer-health-calm-1-2.svg',
    imageAlt: 'John Kamau, farmer and founder of GreenHarvest Africa smiling in a field',
  },
  {
    quote: "With Musoni's support, we expanded our tech startup to five African markets",
    author: 'Aisha Mwale, CEO, FinTech Solutions Ltd.',
    image: 'https://musoni.co.ke/wp-content/uploads/2025/03/team-young-african-people-office-1-1-1.svg',
    imageAlt: 'Aisha Mwale, CEO of FinTech Solutions Ltd., standing with her team in an office',
  },
  {
    quote: "With Musoni's support, we expanded our tech startup to five African markets",
    author: 'Aisha Mwale, CEO, FinTech Solutions Ltd.',
    image: 'https://musoni.co.ke/wp-content/uploads/2025/03/team-young-african-people-office-1-1-1.svg',
    imageAlt: 'Aisha Mwale, CEO of FinTech Solutions Ltd., standing with her team in an office',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Featured Success Stories</h2>
        <div className={styles.carouselWrap}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].imageAlt}
              />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.quote}>{testimonials[current].quote}</p>
              <p className={styles.author}>{testimonials[current].author}</p>
            </div>
          </div>
          <button onClick={prev} className={styles.prevBtn} aria-label="Previous testimonial">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#041447" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button onClick={next} className={styles.nextBtn} aria-label="Next testimonial">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#041447" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${i === current ? styles.active : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
