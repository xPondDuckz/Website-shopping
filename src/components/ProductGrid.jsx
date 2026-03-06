import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';
import { MOCK_PRODUCTS } from '../data/mockProducts';

const ProductGrid = () => {
  return (
    <section className="product-grid-section">
      <div className="product-grid">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="load-more-container">
        <button className="load-more-btn uppercase">VIEW MORE</button>
      </div>
    </section>
  );
};

export default ProductGrid;
