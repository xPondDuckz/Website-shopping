import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SORTED_COUNTRIES } from '../utils/countries';
import './Register.css';

const Register = () => {
  const { t, language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(SORTED_COUNTRIES.find(c => c.code === 'TH'));
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="register-page">
      <div className="register-container">
        
        <div className="register-header">
          <h1 className="register-title">{t('personalDetails')}</h1>
          <div className="register-options">
            <label className="radio-label">
              <input type="radio" name="account-type" defaultChecked />
              <span className="radio-custom"></span>
              {t('personalRadio')}
            </label>
            <label className="radio-label">
              <input type="radio" name="account-type" />
              <span className="radio-custom"></span>
              {t('companyRadio')}
            </label>
          </div>
        </div>

        <form className="register-form" onSubmit={(e) => { e.preventDefault(); alert("Account Created (Mock)!"); }}>
          <div className="form-row">
            <div className="form-group">
              <input type="email" className="form-input" placeholder={t('emailPlaceholder')} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="password" className="form-input" placeholder={t('passwordPlaceholder')} required />
            </div>
            <div className="form-group">
              <input type="password" className="form-input" placeholder={t('confirmPasswordPlaceholder')} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder={t('namePlaceholder')} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder={t('surnamePlaceholder')} required />
            </div>
          </div>
          
          <div className="form-row prefix-row">
            <div className="form-group prefix-select" ref={dropdownRef}>
              <div 
                className={`custom-select-trigger form-input ${isDropdownOpen ? 'open' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="selected-flag">{selectedCountry.flag}</span>
                <span className="selected-dial">{selectedCountry.dial_code}</span>
              </div>
              
              <div className={`custom-select-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <ul className="country-list hide-scrollbar">
                  {SORTED_COUNTRIES.map((country) => (
                    <li 
                      key={country.code} 
                      className={`country-item ${selectedCountry.code === country.code ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="country-flag">{country.flag}</span>
                      <span className="country-name">{country.name}</span>
                      <span className="country-dial">{country.dial_code}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="form-group phone-input">
              <input type="tel" className="form-input" placeholder={t('phonePlaceholder')} required />
            </div>
          </div>

          <div className="form-terms">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">{t('newsletterTerms')}</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">{t('privacyTerms').split('PRIVACY')[0] || t('privacyTerms').split('ความเป็นส่วนตัว')[0]}<a href="#">{language === 'en' ? 'PRIVACY STATEMENT' : 'ความเป็นส่วนตัว'}</a></span>
            </label>
          </div>

          <button type="submit" className="submit-btn uppercase">{t('createAccountBtn')}</button>
        </form>

      </div>
    </div>
  );
};

export default Register;
