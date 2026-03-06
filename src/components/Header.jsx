import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = ({ onMenuClick }) => {
  const { language, switchLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-left">
        {!isAuthPage && (
          <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}
        <Link to="/" className="logo">
          {/* Using a precise SVG to replicate Zara's iconic logo overlapping style */}
          <svg viewBox="0 0 132 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M109.13 54H131.62L116.14 0H94.12L109.13 54ZM109.91 29.83H122.95L118.96 15.6H105.86L109.91 29.83ZM28.53 54H48.24L76.13 4.88V54H91.13V0H71.49L43.53 49.12V0H28.53V54ZM0 54H23.95L21.2 50.15H6.88L23.49 14.65V0H0V3.88H15.64L0 37.36V54Z" />
          </svg>
        </Link>
      </div>
      
      <div className="header-right">
        {!isAuthPage && (
          <Link 
            to="/search" 
            className="header-item search-btn font-medium" 
            aria-label={t('search')}
          >
            <Search size={22} strokeWidth={1.5} />
          </Link>
        )}
        <div className="language-selector hidden-mobile">
          <div className="language-current">
            <Globe size={16} strokeWidth={1.5} />
            <span className="lang-text">{language === 'th' ? 'TH' : 'EN'}</span>
          </div>
          <div className="language-dropdown">
            <button 
              className={`lang-option ${language === 'th' ? 'active' : ''}`}
              onClick={() => switchLanguage('th')}
            >
              <span className="lang-flag">🇹🇭</span>
              <span className="lang-label">ภาษาไทย</span>
            </button>
            <button 
              className={`lang-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => switchLanguage('en')}
            >
              <span className="lang-flag">🇬🇧</span>
              <span className="lang-label">ENGLISH</span>
            </button>
          </div>
        </div>
        <nav className="header-nav hidden-mobile">
          <Link to="/login" className="header-link">{t('login')}</Link>
          <a href="#help" className="header-link">{t('help')}</a>
          <button className="header-link cart-btn" aria-label="Shopping bag">
            <ShoppingBag strokeWidth={1} size={22} />
            <span className="cart-count">0</span>
          </button>
        </nav>
        <button className="header-link cart-btn hidden-desktop" aria-label="Shopping bag">
          <ShoppingBag strokeWidth={1} size={24} />
          <span className="cart-count">0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
