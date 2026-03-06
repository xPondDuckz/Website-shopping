import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Search.css';

const RECOMMENDATIONS = [
  { id: 101, image: '/assets/images/IMG_5509.JPG', name: 'TEXTURED BLAZER', price: '3,490 THB' },
  { id: 102, image: '/assets/images/IMG_5510.JPG', name: 'KNIT MAXI DRESS', price: '1,790 THB' },
  { id: 103, image: '/assets/images/IMG_5511.JPG', name: 'PLEATED TROUSERS', price: '1,990 THB' },
  { id: 104, image: '/assets/images/IMG_5512.JPG', name: '100% LINEN SHIRT', price: '1,590 THB' },
  { id: 105, image: '/assets/images/IMG_5513.JPG', name: 'FAUX LEATHER JACKET', price: '2,990 THB' },
  { id: 106, image: '/assets/images/IMG_5514.JPG', name: 'BASIC T-SHIRT', price: '490 THB' },
  { id: 107, image: '/assets/images/IMG_5515.JPG', name: 'OVERSIZED SWEATER', price: '2,490 THB' },
  { id: 108, image: '/assets/images/IMG_5516.JPG', name: 'DENIM SKIRT', price: '1,290 THB' },
  { id: 109, image: '/assets/images/IMG_5528.JPG', name: 'WOOL BLEND COAT', price: '4,590 THB' },
  { id: 110, image: '/assets/images/IMG_5548.JPG', name: 'STRAIGHT FIT JEANS', price: '1,890 THB' },
];

const Search = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = React.useRef(null);

  useEffect(() => {
    // Auto focus on mount
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`กำลังค้นหารายการ: ${query}`);
    }
  };

  return (
    <div className="search-page">
      {/* Centered Search Section */}
      <div className={`search-hero-section ${isFocused || query ? 'active-search' : ''}`}>
        <div className="search-input-wrapper">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              ref={searchInputRef}
              type="text"
              className="huge-search-input"
              placeholder={t('search')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button type="submit" className="huge-search-btn" aria-label="Submit search">
              <SearchIcon size={28} strokeWidth={1} />
            </button>
          </form>
          <div className="search-underline"></div>
        </div>
      </div>

      {/* Recommendations Feed Section */}
      <section className="recommendations-section">
        <h3 className="recommendations-title">คุณอาจจะสนใจใน (You might be interested in)</h3>
        <div className="recommendations-grid">
          {RECOMMENDATIONS.map(item => (
            <div key={item.id} className="recommendation-card">
              <div className="recommendation-img-container">
                <img src={item.image} alt={item.name} className="recommendation-img" loading="lazy" />
              </div>
              <div className="recommendation-info">
                <span className="recommendation-name">{item.name}</span>
                <span className="recommendation-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
