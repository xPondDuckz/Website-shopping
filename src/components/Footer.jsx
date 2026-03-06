import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3 className="footer-title">{t('footerNewsletterTitle')}</h3>
          <form className="newsletter-form">
            <input type="email" placeholder={t('footerNewsletterPlaceholder')} className="newsletter-input" />
            <button type="submit" className="newsletter-btn">{t('footerNewsletterBtn')}</button>
          </form>
        </div>
        
        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><Instagram strokeWidth={1.5} size={20} /></a>
          <a href="#" aria-label="Facebook"><Facebook strokeWidth={1.5} size={20} /></a>
          <a href="#" aria-label="Twitter"><Twitter strokeWidth={1.5} size={20} /></a>
          <a href="#" aria-label="Youtube"><Youtube strokeWidth={1.5} size={20} /></a>
        </div>
      </div>

      <div className="footer-links-grid">
        <div className="footer-column">
          <h4 className="footer-col-title">{t('helpMenuTitle')}</h4>
          <ul className="footer-list">
            <li><a href="#">{t('shopAtZara')}</a></li>
            <li><a href="#">{t('productInfo')}</a></li>
            <li><a href="#">{t('paymentInfo')}</a></li>
            <li><a href="#">{t('shippingInfo')}</a></li>
            <li><a href="#">{t('exchangesInfo')}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-col-title">{t('followUsTitle')}</h4>
          <ul className="footer-list">
            <li><a href="#">{t('newsletter')}</a></li>
            <li><a href="#">{t('tiktok')}</a></li>
            <li><a href="#">{t('facebook')}</a></li>
            <li><a href="#">{t('twitter')}</a></li>
            <li><a href="#">{t('pinterest')}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-col-title">{t('companyTitle')}</h4>
          <ul className="footer-list">
            <li><a href="#">{t('aboutUs')}</a></li>
            <li><a href="#">{t('offices')}</a></li>
            <li><a href="#">{t('stores')}</a></li>
            <li><a href="#">{t('workWithUs')}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-col-title">{t('policiesTitle')}</h4>
          <ul className="footer-list">
            <li><a href="#">{t('privacyPolicy')}</a></li>
            <li><a href="#">{t('purchaseConditions')}</a></li>
            <li><a href="#">{t('cookiesSettings')}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-region">
          <span>{t('language') === 'th' ? 'ไทย' : 'THAILAND'}</span>
        </div>
        <div className="footer-copyright">
          <span>{t('language') === 'th' ? 'ภาษาไทย' : 'ENGLISH'}</span>
          <span>© ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
