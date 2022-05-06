/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const { children } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button className="btn">{children}</button>
  );
}

export default Button;
