'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Loans',
    href: '/loans',
    children: [
      { label: 'Business Loans', href: '/loans#BusinessLoans' },
      { label: 'Agricultural Loans', href: '/loans#AgriculturalLoans' },
      { label: 'Agricultural Asset Finance', href: '/loans#AgriculturalAssetFinance' },
      { label: 'Education Loans', href: '/loans#EducationLoans' },
      { label: 'Emergency Loans', href: '/loans#EmergencyLoans' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      { label: 'Our Story', href: '/company#ourstory' },
      { label: 'Our Values', href: '/company#ourvalues' },
      { label: 'Board', href: '/company#boardmembers' },
      { label: 'Executive Team', href: '/company#executiveteam' },
    ],
  },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Current Opportunities', href: '/current-opportunities' },
  { label: 'Contacts', href: '/contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img
              src="https://musoni.co.ke/wp-content/uploads/2025/02/Muson-Green-White-Logo.svg"
              alt="Musoni Capital Limited"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div key={item.label} className="dropdown-parent">
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20to%20to%20apply%20for%20a%20loan."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnApply}
            >
              Apply for Loan
            </a>
            <a
              href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20your%20help%20with%20login%20to%20the%20portal."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLogin}
            >
              Member Login
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <img
            src="https://musoni.co.ke/wp-content/uploads/2025/02/Muson-Green-White-Logo.svg"
            alt="Musoni"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className={styles.mobileCloseBtn}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <div key={item.label}>
              <div className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className={styles.mobileExpandBtn}
                  >
                    {mobileExpanded === item.label ? '−' : '+'}
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className={styles.mobileSubNav}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileCtas}>
            <a
              href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20to%20to%20apply%20for%20a%20loan."
              className={styles.mobileBtnApply}
            >
              Apply for Loan
            </a>
            <a
              href="https://wa.me/254772717653?text=Hello%20Musoni,%20I%20would%20like%20your%20help%20with%20login%20to%20the%20portal."
              className={styles.mobileBtnLogin}
            >
              Member Login
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
