import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Login.css';

const Login = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('normal'); // 'normal' | 'wholesale'

  return (
    <div className="login-page">
      <div className="login-container">
        
        <div className="login-header">
          <h1 className="login-title">{t('loginTitle')}</h1>
        </div>

        <div className="login-tabs">
          <button 
            className={`login-tab ${activeTab === 'normal' ? 'active' : ''}`}
            onClick={() => setActiveTab('normal')}
          >
            {t('tabNormal')}
          </button>
          <button 
            className={`login-tab ${activeTab === 'wholesale' ? 'active' : ''}`}
            onClick={() => setActiveTab('wholesale')}
          >
            {t('tabWholesale')}
          </button>
        </div>

        <div className="login-form-wrapper">
          {activeTab === 'normal' ? (
            <form className="login-form fade-in" onSubmit={(e) => { e.preventDefault(); alert("Logged In (Mock)!"); }}>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder={t('emailPlaceholder')} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder={t('passwordPlaceholder')} 
                  required 
                />
              </div>
              <button type="submit" className="submit-btn uppercase">{t('loginBtn')}</button>
              
              <div className="form-links">
                <a href="#forgot" className="form-link">{t('forgotPassword')}</a>
              </div>
            </form>
          ) : (
            <form className="login-form fade-in" onSubmit={(e) => { e.preventDefault(); alert("Logged In (Mock)!"); }}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder={t('wholesaleIdPlaceholder')} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder={t('passwordPlaceholder')} 
                  required 
                />
              </div>
              <button type="submit" className="submit-btn uppercase">{t('loginBtn')}</button>
              
              <div className="form-links">
                <a href="#wholesale-support" className="form-link">CONTACT WHOLESALE SUPPORT</a>
              </div>
            </form>
          )}
        </div>

        <div className="register-section">
          <h2 className="register-title">{t('registerTitle')}</h2>
          <p className="register-text">
            {t('registerText')}
          </p>
          <Link to="/register" className="register-btn uppercase">{t('createAccountBtn')}</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
