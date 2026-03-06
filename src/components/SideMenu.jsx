import React, { useEffect, useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './SideMenu.css';

const CATEGORY_KEYS = ['menuWoman', 'menuMan', 'menuKids', 'menuHome'];

const SUBMENU_KEYS = [
  'newCollection', 'dresses', 'shirts', 'tshirts', 'tops', 
  'coatsAndJackets', 'jeans', 'trousers', 'shoes', 'bags'
];

const SideMenu = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button className="close-btn" onClick={onClose} aria-label="Close menu">
            <X strokeWidth={1} size={32} />
          </button>
        </div>

        <div className="menu-categories hide-scrollbar">
          {CATEGORY_KEYS.map((key, index) => (
            <button 
              key={key}
              className={`category-tab ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {t(key)}
            </button>
          ))}
        </div>

        <div className="menu-content">
          <ul className="subcategory-list">
            <li className="collection-highlight">
              <span>ZARA SRPLS</span>
            </li>
            {SUBMENU_KEYS.map((key, idx) => (
              <li key={idx} className="subcategory-item font-light">
                <a href={`#${key}`}>{t(key)}</a>
              </li>
            ))}
            {/* Some spacing then generic links */}
            <li className="subcategory-spacer"></li>
            <li className="subcategory-item font-light"><a href="#info">+ {t('collectionInfo')}</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
