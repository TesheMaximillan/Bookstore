/* eslint-disable react/prop-types */
import React from 'react';

function Card(props) {
  const { children } = props;

  return (
    <div className="card">{children}</div>
  );
}

export default Card;
