import React from 'react';
import PropTypes from 'prop-types';
import './ContainerSection.css';

export const ContainerSection = ({ title, children }) => {
  return (
    <section className="container-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

ContainerSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


