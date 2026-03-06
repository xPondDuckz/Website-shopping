import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CategoryNav.css';

const CATEGORY_KEYS = [
  'newIn',
  'basics',
  'knitwear',
  'outerwear',
  'dresses',
  'shirts',
  'tops',
  'tshirts',
  'trousers',
  'jeans',
  'skirts',
  'shorts',
  'shoes',
  'bags',
  'accessories',
  'beauty'
];

const CategoryNav = () => {
  const { t } = useLanguage();
  return (
    <div className="category-nav-container">
      <nav className="category-nav hide-scrollbar">
        <ul className="category-list">
          {CATEGORY_KEYS.map((key, index) => (
            <li key={index} className="category-item">
              <a href={`#${key}`} className={index === 0 ? 'active font-medium' : 'font-light'}>
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryNav;
