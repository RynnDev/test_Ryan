import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProducts(limit);
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setLimit(prev => prev + 6);
  };

  if (loading && products.length === 0) {
    return (
      <>
        <Navbar />
        <Hero />
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Hero />
        <div className="error-container">
          <div className="error-box">
            <p className="error-message">Error loading products: {error}</p>
            <button onClick={fetchProducts} className="btn btn-danger">
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-header">
            <h2 className="products-title">Our Products</h2>
            <p className="products-subtitle">
              Browse our latest collection of amazing products
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
                rating={product.rating}
              />
            ))}
          </div>

          {limit < 30 && (
            <div className="load-more-container">
              <button 
                onClick={loadMore}
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? 'Loading...' : 'Load More Products'}
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;