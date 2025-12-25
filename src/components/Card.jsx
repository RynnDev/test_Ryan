import React from 'react';

const Card = ({ title, description, price, thumbnail, rating }) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <div className="card-rating">
            <svg className="star-icon" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="rating-text">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;