import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

// Mock Data for the New Arrivals Horizontal Slider
const NEW_ARRIVALS = [
  { id: 1, image: '/assets/images/IMG_5509.JPG', name: 'TEXTURED BLAZER', price: '3,490 THB' },
  { id: 2, image: '/assets/images/IMG_5510.JPG', name: 'KNIT MAXI DRESS', price: '1,790 THB' },
  { id: 3, image: '/assets/images/IMG_5511.JPG', name: 'PLEATED TROUSERS', price: '1,990 THB' },
  { id: 4, image: '/assets/images/IMG_5512.JPG', name: '100% LINEN SHIRT', price: '1,590 THB' },
  { id: 5, image: '/assets/images/IMG_5513.JPG', name: 'FAUX LEATHER JACKET', price: '2,990 THB' },
  { id: 6, image: '/assets/images/IMG_5514.JPG', name: 'BASIC T-SHIRT', price: '490 THB' },
  { id: 7, image: '/assets/images/IMG_5515.JPG', name: 'OVERSIZED SWEATER', price: '2,490 THB' },
  { id: 8, image: '/assets/images/IMG_5516.JPG', name: 'DENIM SKIRT', price: '1,290 THB' }
];

// Mock Data for the Vertical Lookbook Feed
const LOOKBOOKS = [
  {
    id: 1,
    modelImage: '/assets/images/IMG_5528.JPG',
    title: 'WINTER CAMPAIGN',
    items: [
      { id: 'item1', x: 45, y: 30, name: 'WOOL BLEND COAT', price: '4,590 THB' },
      { id: 'item2', x: 50, y: 70, name: 'LEATHER KNEE CROTCH BOOTS', price: '5,990 THB' }
    ]
  },
  {
    id: 2,
    modelImage: '/assets/images/IMG_5548.JPG',
    title: 'MENSWEAR EDIT',
    items: [
      { id: 'item3', x: 40, y: 40, name: 'CHUNKY KNIT SWEATER', price: '2,490 THB' },
      { id: 'item4', x: 60, y: 60, name: 'STRAIGHT FIT JEANS', price: '1,890 THB' }
    ]
  },
  {
    id: 3,
    modelImage: '/assets/images/IMG_5544.JPG',
    title: 'EVENING COLLECTION',
    items: [
      { id: 'item5', x: 50, y: 45, name: 'SILK MIDI DRESS', price: '3,990 THB' }
    ]
  }
];

const Home = () => {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <main className="home-container">
      
      {/* SECTION 1: Horizontal Slider for New Arrivals */}
      <section className="new-arrivals-section">
        <div className="section-header">
          <h2 className="section-title">{t('newArrivalsTitle')}</h2>
          <div className="slider-controls hidden-mobile">
            <button onClick={scrollLeft} aria-label="Scroll left" className="control-btn"><ChevronLeft size={24} strokeWidth={1} /></button>
            <button onClick={scrollRight} aria-label="Scroll right" className="control-btn"><ChevronRight size={24} strokeWidth={1} /></button>
          </div>
        </div>
        
        <div className="horizontal-slider hide-scrollbar" ref={sliderRef}>
          {NEW_ARRIVALS.map(item => (
            <div key={item.id} className="slider-item">
              <div className="slider-image-container">
                <img src={item.image} alt={item.name} className="slider-image" loading="lazy" />
                <button className="add-btn uppercase"><Plus size={16} strokeWidth={1} /> <span>{t('addBtn')}</span></button>
              </div>
              <div className="slider-info">
                <h3 className="slider-name">{item.name}</h3>
                <p className="slider-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Vertical Lookbook Scroll */}
      <section className="lookbook-section">
        {LOOKBOOKS.map(lookbook => (
          <div key={lookbook.id} className="lookbook-feed-item">
            <div className="lookbook-image-wrapper">
              <img src={lookbook.modelImage} alt={lookbook.title} className="lookbook-image" loading="lazy" />
              
              {/* Shop the Look interactive hot-spots */}
              {lookbook.items.map(item => (
                <div 
                  key={item.id} 
                  className="shop-spot"
                  style={{ top: `${item.y}%`, left: `${item.x}%` }}
                >
                  <div className="spot-dot"></div>
                  <div className="spot-tooltip">
                    <span className="spot-name">{item.name}</span>
                    <span className="spot-price">{item.price}</span>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="lookbook-footer">
              <h2 className="lookbook-title">{lookbook.title}</h2>
              <button className="shop-the-look-btn">{t('shopTheLook')}</button>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
};

export default Home;
