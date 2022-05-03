import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <button type="button" className="btn btn-categories" onClick={handleStatus}>Check Status</button>
  );
}

export default Categories;
