import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        {/* Main image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`product-img main-img ${isHovered ? 'fade-out' : 'fade-in'}`}
          loading="lazy"
        />
        {/* Hover image */}
        {product.hoverImage && (
          <img 
            src={product.hoverImage} 
            alt={`${product.name} alternate view`} 
            className={`product-img hover-img ${isHovered ? 'fade-in' : 'fade-out'}`}
            loading="lazy"
          />
        )}
        
        {/* Add to bag button appears on hover in Zara UI */}
        <button className="add-to-cart-btn uppercase">
          <Plus size={16} strokeWidth={1.5} />
          <span>ADD</span>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
