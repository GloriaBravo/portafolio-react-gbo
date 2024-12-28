import React from 'react';
import './ImgComponent.css';

export const ImgComponent = ({ src, alt, bordered = false }) => {
  const handleError = (e) => {
    e.target.src = '/path/to/default-image.jpg';
  };

  return (
    <img
      src={src}
      alt={alt || 'Imagen'}
      onError={handleError}
      className={`img-component ${bordered ? 'img-component-bordered' : ''}`}
    />
  );
};
