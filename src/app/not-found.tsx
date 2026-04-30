'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon/AppIcon';
import styles from './not-found.module.scss';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router?.push('/');
  };

  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history?.back();
    }
  };

  return (
    <div className={styles?.container}>
      <div className={styles?.inner}>
        <div>
          <h1 className={styles?.heroNumber}>404</h1>
        </div>
        <h2 className={styles?.title}>Page Not Found</h2>
        <p className={styles?.description}>
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back!
        </p>
        <div className={styles?.actions}>
          <button onClick={handleGoBack} className={styles?.btnPrimary}>
            <Icon name="ArrowLeftIcon" size={16} />
            Go Back
          </button>
          <button onClick={handleGoHome} className={styles?.btnSecondary}>
            <Icon name="HomeIcon" size={16} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}