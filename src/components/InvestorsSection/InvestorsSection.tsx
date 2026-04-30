'use client';
import React from 'react';
import styles from './InvestorsSection.module.scss';

const partnerLogos = [
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_19251c3d5-1777582399552.png", alt: 'Microvest partner logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_13b088cd3-1777582400474.png", alt: 'Musoni BV partner logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c84aaac4-1777582401415.png", alt: 'Partner organization logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c92a9d0c-1777582401219.png", alt: 'Mastercard Foundation logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bbc6fcf3-1777582401423.png", alt: 'Inspiring Development logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a3d9b6cc-1777582400232.png", alt: 'MCE Social Capital logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdcc4c87-1777582400791.png", alt: 'Grameen Foundation logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b47bd045-1777582400236.png", alt: 'RegMIFA fund logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f711b3de-1777582400780.png", alt: 'NMI partner logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_19379bb3a-1777582400738.png", alt: 'HIVOS organization logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_16b5fe385-1777582400031.png", alt: 'AGF fund logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ada642c5-1777582403660.png", alt: 'USAID logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_162dbb6f9-1777582401059.png", alt: 'KfW development bank logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_102b3c304-1777582401413.png", alt: 'ALCB Fund logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_18b28773b-1777582400751.png", alt: 'Alterfin cooperative logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1da1c750c-1777582401409.png", alt: 'WPF partner logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3a53754-1777582402220.png", alt: 'SIMA Funds logo' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_130c174d8-1777582401058.png", alt: 'FEFISOL fund logo' }];


export default function InvestorsSection() {
  const rows = [
  partnerLogos?.slice(0, 6),
  partnerLogos?.slice(6, 12),
  partnerLogos?.slice(12, 18)];


  return (
    <section className={styles?.section}>
      <div className={styles?.inner}>
        <div className={styles?.card}>
          <div className={styles?.row}>
            <div className={styles?.logoGrid}>
              {rows?.map((row, rowIdx) =>
              <div
                key={rowIdx}
                className={`${styles?.logoRow} ${rowIdx < rows?.length - 1 ? styles?.bordered : ''}`}>

                  {row?.map((logo) =>
                <div key={logo?.alt} className={styles?.logoItem}>
                      <img src={logo?.src} alt={logo?.alt} />
                    </div>
                )}
                </div>
              )}
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
                className={styles?.cta}>

                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}