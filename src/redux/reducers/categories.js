/* eslint-disable default-param-last */
import { STATUS } from '../actionTypes/actionTypes';

// Reducer
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default: return state;
  }
};

export default categoryReducer;
